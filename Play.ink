VAR name = "trick"
VAR playInt = 0
==play==

what would you like to play?

+Fetch ->fetch
+Frisbee ->frisbee
+Tug Of War ->tugofwar
+Tricks ->tricks

==fetch==

   ~playInt = RANDOM(1,4)
{ playInt == 1:

You threw a ball for your dog to fetch. They caught it! 
# IMAGE: Images/caught.png
# AUDIO: audio/Squeaky.wav
+what to do next? ->whattodo

}

{ playInt == 2:

You threw a ball for your dog to fetch. They missed it...
# IMAGE: Images/missed.png
# AUDIO: audio/Squeaky.wav
+what to do next? ->whattodo

}
{ playInt == 3:

You threw a ball for your dog to fetch. They forgot it!
# IMAGE: Images/forgot_The_Ball.png
# AUDIO: audio/Squeaky.wav
+what to do next? ->whattodo

}
{ playInt == 4:

You threw a ball for your dog to fetch. They swallowed it!
# IMAGE: Images/Swallowed.png
# AUDIO: audio/Squeaky.wav
+what to do next? ->whattodo

}

-> END

==frisbee==

~playInt = RANDOM(1,2)

{ playInt == 1:

You threw a frisbee at your dog. They caught it!
# IMAGE: Images/Frisbee_caught.png
# AUDIO: audio/Play.mp3
+what to do next? ->whattodo

}
{ playInt == 2:

You threw a frisbee at your dog. They missed it...
# IMAGE: Images/frisbee_missed.png
# AUDIO: audio/Play.mp3
+what to do next? ->whattodo

}
-> END


==tugofwar==

~playInt = RANDOM(1,2)
{ playInt == 2:
You played Tug of War with your dog. You won!
# IMAGE: Images/tug_of_War_Lose.png

# AUDIO: audio/Angry Bark 2.wav
+what to do next? ->whattodo
}
{ playInt == 2:
You played Tug of War with your dog. You lost!
# IMAGE: Images/tug_of_War_Lose.png

# AUDIO: audio/Angry Bark 2.wav
+what to do next? ->whattodo
}

-> END


==tricks==
~playInt = RANDOM(1,5)

{ playInt == 1:
Your dog played dead!
# IMAGE: Images/play_dead.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodo
}

{ playInt == 2:
Your dog rolled over!
# IMAGE: Images/roll_over.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodo
}
{ playInt == 3:
Your dog gave you a handshake!
# IMAGE: Images/shake.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodo
}
{ playInt == 4:
You dog spoke to you!
# IMAGE: Images/speak.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodo
}
{ playInt == 5:
Your dog gave you a kiss!
# IMAGE: Images/kiss.png
# AUDIO: audio/Bark 2.wav
+what to do next? ->whattodo
}

-> END