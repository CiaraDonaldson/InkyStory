
==carec==
How would you like to care for your dog?
+[bathe] ->bathec
+[feed] ->feedc
+[water] ->waterc
+[bathroom] ->bathroomc
+[walk] ->walkc
+[brush] ->brushc

->END

==bathec==
What a lovely bath you got all wet too.
# IMAGE: Images/bathe C.png
# AUDIO: AUDIO/Sad Bar.wav
~Stamina += 1
+what to do next? ->whattodoc
->END

==feedc==
Your dog ate all the food!
# IMAGE: Images/Feed C.png
# AUDIO:AUDIO/245039__kwahmah-02__dog-eating.wav
~Stamina += 1
+what to do next? ->whattodoc
->END
==waterc==
Wow drank the water so fast it's all on the floor!
# IMAGE: Images/water C.png
# AUDIO:AUDIO/433709__dersuperanton__dog-drinking-water.wav
~Stamina += 1
+what to do next? ->whattodoc
->END

==bathroomc==
Your pup went potty!
# IMAGE: Images/bathroom C.png
# AUDIO:AUDIO/274448__lorenzgillner__toilet-flushing.wav
~Stamina += 1
+what to do next? ->whattodoc
->END

==walkc==
What a nice day for a walk!
# IMAGE: Images/Walks C.png
# AUDIO:AUDIO/461559__slv1__dog-leash.wav
~Stamina += 1
+what to do next? ->whattodoc
->END
==brushc==
Oof thats a lotta hair..
# IMAGE: Images/Brush C.png
# AUDIO:AUDIO/389452__lzmraul__brushing.wav
~Stamina += 1
+what to do next? ->whattodoc
-> END

==playc==

what would you like to play?

+[Fetch] ->fetchc
+[Frisbee] ->frisbeec
+[Tug Of War] ->tugofwarc
+[Tricks] ->tricksc

==fetchc==

   ~playInt = RANDOM(1,4)
{ playInt == 1:

You threw a ball for your dog to fetch. They caught it! 
# IMAGE: Images/caught C.png
# AUDIO: AUDIO/Squeaky.wav
~Stamina -= 1
}

{ playInt == 2:

You threw a ball for your dog to fetch. They missed it...
# IMAGE: Images/missed C.png
# AUDIO: AUDIO/Squeaky.wav
~Stamina -= 1


}
{ playInt == 3:

You threw a ball for your dog to fetch. They forgot it!
# IMAGE: Images/forgot_The_Ball C.png
# AUDIO: AUDIO/Squeaky.wav
~Stamina -= 1

}
{ playInt == 4:

You threw a ball for your dog to fetch. They swallowed it!
# IMAGE: Images/Swallowed C.png
# AUDIO: AUDIO/Squeaky.wav
~Stamina -= 1

}
+what to do next? ->whattodoc

-> END

==frisbeec==

~playInt = RANDOM(1,2)

{ playInt == 1:

You threw a frisbee at your dog. They caught it!
# IMAGE: Images/Frisbee_caught C.png
# AUDIO: AUDIO/Angry Bark.wav
~Stamina -= 1


}
{ playInt == 2:

You threw a frisbee at your dog. They missed it...
# IMAGE: Images/frisbee_missed C.png
# AUDIO: AUDIO/Angry Bark.wav

~Stamina -= 1


}
+what to do next? ->whattodoc
-> END


==tugofwarc==

~playInt = RANDOM(1,2)
{ playInt == 1:
You played Tug of War with your dog. You won!
# IMAGE: Images/tug_of_war_win C.png
# AUDIO: AUDIO/Angry Bark.wav

~Stamina -= 1

}
{ playInt == 2:
You played Tug of War with your dog. You lost!
# IMAGE: Images/tug_of_War_Lose C.png

# AUDIO: AUDIO/Angry Bark.wav
~Stamina -= 1

}
+what to do next? ->whattodoc

-> END


==tricksc==
~playInt = RANDOM(1,5)

{ playInt == 1:
Your dog played dead!
# IMAGE: Images/play_dead C.png
# AUDIO: AUDIO/Bark 2.wav
~Stamina -= 1

}

{ playInt == 2:
Your dog rolled over!
# IMAGE: Images/roll_over C.png
# AUDIO: AUDIO/Bark 2.wav
~Stamina -= 1

}
{ playInt == 3:
Your dog gave you a handshake!
# IMAGE: Images/shake C.png
# AUDIO: AUDIO/Bark 2.wav
~Stamina -= 1

}
{ playInt == 4:
You dog spoke to you!
# IMAGE: Images/speak C.png
# AUDIO: AUDIO/Bark 2.wav
~Stamina -= 1

}
{ playInt == 5:
Your dog gave you a kiss!
# IMAGE: Images/kiss C.png
# AUDIO: AUDIO/Bark 2.wav
~Stamina -= 1
}

+what to do next? ->whattodoc

-> END