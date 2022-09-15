INCLUDE Care.ink
INCLUDE Play.ink
INCLUDE Chihuahua.ink
INCLUDE StaminaCheck.ink

VAR MaxStamina = 5
VAR Stamina = 5

//choose your pet
Welcome to Pet Owner Simulator!

->choosepet

==choosepet==
+[Chihuahua] -> whattodoc
+[German Shepard] -> whattodo
# IMAGE: Images/Adopt.png
# IMAGE: Images/Adopt C.png




==whattodo==

{ Stamina == MaxStamina:
+[play] ->play

}
{ Stamina < MaxStamina && Stamina != 0:
+[play] ->play
+[care] ->care
}
{ Stamina == 0:
+[care] ->care
}
//# IMAGE: Images/IMG_0022.jpg
//# IMAGE: Images/IMG_0023.jpg
//# IMAGE: Images/IMG_0024.jpg
//# IMAGE: Images/IMG_0025.jpg

==whattodoc==


+{ Stamina == MaxStamina}[play] ->playc



+{ Stamina < MaxStamina && Stamina != 0}[play] ->playc
+{ Stamina < MaxStamina && Stamina != 0}[care] ->carec


+{ Stamina == 0}[care] ->carec
# AUDIO: audio/Dog bark.wav

//# AUDIO: audio/Whimper.wav
//# AUDIO: audio/Tired dog.wav
//# AUDIO: audio/Whimper.wav
//# AUDIO: audio/whining.mp3
//# AUDIO: audio/ Barking Dog 3.wav


    
-> END