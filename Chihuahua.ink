
==carec==
How would you like to care for your dog?
+bathe ->bathec
+feed ->feedc
+water ->waterc
+bathroom ->bathroomc
+walk ->walkc
+brush ->brushc

->END

==bathec==
What a lovely bath you got all wet too.
# IMAGE: Images/bathe_C.png
# AUDIO: audio/Sad Bar.wav
+what to do next? ->whattodoc
->END

==feedc==
Your dog ate all the food!
# IMAGE: Images/Feed_C.png
+what to do next? ->whattodoc
->END
==waterc==
Wow drank the water so fast it's all on the floor!
# IMAGE: Images/water_C.png
+what to do next? ->whattodoc
->END

==bathroomc==
Your pup went potty!
# IMAGE: Images/bathroom_C.png
+what to do next? ->whattodoc
->END

==walkc==
What a nice day for a walk!
# IMAGE: Images/Walks_C.png
+what to do next? ->whattodoc
->END
==brushc==
Oof thats a lotta hair..
# IMAGE: Images/Brush_C.png

+what to do next? ->whattodoc
-> END

==playc==

what would you like to play?

+Fetch ->fetchc
+Frisbee ->frisbeec
+Tug Of War ->tugofwarc
+Tricks ->tricksc

==fetchc==

   ~playInt = RANDOM(1,4)
{ playInt == 1:

You threw a ball for your dog to fetch. They caught it! 
# IMAGE: Images/caught_C.png
# AUDIO: audio/Squeaky.wav
+what to do next? ->whattodoc

}

{ playInt == 2:

You threw a ball for your dog to fetch. They missed it...
# IMAGE: Images/missed_C.png
# AUDIO: audio/Squeaky.wav
+what to do next? ->whattodoc

}
{ playInt == 3:

You threw a ball for your dog to fetch. They forgot it!
# IMAGE: Images/forgot_The_Ball_C.png
# AUDIO: audio/Squeaky.wav
+what to do next? ->whattodoc

}
{ playInt == 4:

You threw a ball for your dog to fetch. They swallowed it!
# IMAGE: Images/Swallowed_C.png
# AUDIO: audio/Squeaky.wav
+what to do next? ->whattodoc

}

-> END

==frisbeec==

~playInt = RANDOM(1,2)

{ playInt == 1:

You threw a frisbee at your dog. They caught it!
# IMAGE: Images/Frisbee_caught_C.png
# AUDIO: audio/Play.mp3
+what to do next? ->whattodoc

}
{ playInt == 2:

You threw a frisbee at your dog. They missed it...
# IMAGE: Images/frisbee_missed_C.png
# AUDIO: audio/Play.mp3
+what to do next? ->whattodoc

}
-> END


==tugofwarc==

~playInt = RANDOM(1,2)
{ playInt == 2:
You played Tug of War with your dog. You won!
# IMAGE: Images/tug_of_war_win_C.png

# AUDIO: audio/Angry Bark 2.wav
+what to do next? ->whattodoc
}
{ playInt == 2:
You played Tug of War with your dog. You lost!
# IMAGE: Images/tug_of_War_Lose_C.png

# AUDIO: audio/Angry Bark 2.wav
+what to do next? ->whattodoc
}

-> END


==tricksc==
~playInt = RANDOM(1,5)

{ playInt == 1:
Your dog played dead!
# IMAGE: Images/play_dead_C.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodoc
}

{ playInt == 2:
Your dog rolled over!
# IMAGE: Images/roll_over_C.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodoc
}
{ playInt == 3:
Your dog gave you a handshake!
# IMAGE: Images/shake_C.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodoc
}
{ playInt == 4:
You dog spoke to you!
# IMAGE: Images/speak_C.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodoc
}
{ playInt == 5:
Your dog gave you a kiss!
# IMAGE: Images/kiss_C.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodoc
}

-> END