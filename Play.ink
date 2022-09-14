VAR name = "trick"

==play==

what would you like to play?

+Fetch ->fetch
+Frisbee ->frisbee
+Tug Of War ->tugofwar
+Tricks ->tricks

==fetch==

{~ You threw a ball for your dog to fetch. They caught it! | You threw a ball for your dog to fetch. They missed it...| You threw a ball for your dog to fetch. They forgot it! | You threw a ball for your dog to fetch. They swallowed it!}

# AUDIO: audio/Squeaky.wav

//# IMAGE: Images/caught.png
//# IMAGE: Images/missed.png
//# IMAGE: Images/forgot_The_Ball.png
//# IMAGE: Images/Swallowed.png

+what to do next? ->whattodo

-> END
==frisbee==

{~ You threw a frisbee at your dog. They caught it!| You threw a frisbee at your dog. They missed it...}
//# IMAGE: Images/Frisbee_caught.png
//# IMAGE: Images/frisbee_missed.png

# AUDIO: audio/Play.mp3
+what to do next? ->whattodo

-> END
==tugofwar==

{~ You played Tug of War with your dog. You won!| You played Tug of War with your dog. You lost! }
//# IMAGE: Images/tug_of_War_Lose.png

# AUDIO: audio/Angry Bark 2.wav
+what to do next? ->whattodo
-> END
==tricks==

{~ Your dog played dead! | Your dog rolled over! | Your dog gave you a handshake! | You dog spoke to you! | Your dog gave you a kiss!}
# AUDIO: audio/Bark 2.wav
//# IMAGE: Images/speak.png
//# IMAGE: Images/shake.png
//# IMAGE: Images/kiss.png
//# IMAGE: Images/play_dead.png
//# IMAGE: Images/roll_over.png

+what to do next? ->whattodo
-> END