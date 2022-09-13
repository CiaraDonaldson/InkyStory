VAR name = "trick"

==play==
what would you like to play?

+fetch? ->fetch
+frisbee? ->frisbee
+tugofwar? ->tugofwar
+tricks? ->tricks

==fetch==

{~ they caught it | they missed it| forgot | swallowed it}
# IMAGE:caught.png
# IMAGE:missed.png
# IMAGE:forgot_The_Ball.png
# IMAGE:Swallowed.png


-> END
==frisbee==

{~ they caught it| they missed it}
# IMAGE:Frisbee_caught.png
# IMAGE:frisbee_missed.png


-> END
==tugofwar==

{~ you won| you lost}

-> END
==tricks==

{~ play dead | rolled over | handshake | speak | kiss}

-> END