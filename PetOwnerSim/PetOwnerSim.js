var storyContent = ﻿{"inkVersion":20,"root":[["\n","\n","^Welcome to Pet Owner Simulator!","\n",{"->":"choosepet"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"choosepet":[[["ev",{"^->":"choosepet.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Continue ",{"->":"$r","var":true},null]}],["ev",{"^->":"choosepet.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^German Shepard ",{"->":"$r","var":true},null]}],["ev",{"^->":"choosepet.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Chihuahua ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"choosepet.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n",{"#":"IMAGE: Images/Adopt.png"},{"#f":5}],"c-1":["ev",{"^->":"choosepet.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n",{"#f":5}],"c-2":["ev",{"^->":"choosepet.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n",{"#f":5}]}],{"#f":1}],"whattodo":[[["ev",{"^->":"whattodo.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^play ",{"->":"$r","var":true},null]}],["ev",{"^->":"whattodo.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^care ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"whattodo.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"play"},"\n",{"#f":5}],"c-1":["ev",{"^->":"whattodo.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"care"},"\n",{"#":"AUDIO: audio/Dog bark.wav"},"end",{"#f":5}]}],{"#f":1}],"care":[["^How would you like to care for your dog?","\n",["ev",{"^->":"care.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^bathe ",{"->":"$r","var":true},null]}],["ev",{"^->":"care.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^feed ",{"->":"$r","var":true},null]}],["ev",{"^->":"care.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^water ",{"->":"$r","var":true},null]}],["ev",{"^->":"care.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^bathroom ",{"->":"$r","var":true},null]}],["ev",{"^->":"care.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^walk ",{"->":"$r","var":true},null]}],["ev",{"^->":"care.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^brush ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"care.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"bathe"},"\n",{"#f":5}],"c-1":["ev",{"^->":"care.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"feed"},"\n",{"#f":5}],"c-2":["ev",{"^->":"care.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"water"},"\n",{"#f":5}],"c-3":["ev",{"^->":"care.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"bathroom"},"\n",{"#f":5}],"c-4":["ev",{"^->":"care.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"walk"},"\n",{"#f":5}],"c-5":["ev",{"^->":"care.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"->":"brush"},"\n","end",{"#f":5}]}],{"#f":1}],"bathe":[["^What a lovely bath you got all wet too.","\n",{"#":"IMAGE: Images/bathe.png"},{"#":"AUDIO: audio/Sad Bar.wav"},["ev",{"^->":"bathe.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathe.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"feed":[["^Your dog ate all the food!","\n",{"#":"IMAGE: Images/Feed.png"},["ev",{"^->":"feed.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"feed.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"water":[["^Wow drank the water so fast it's all on the floor!","\n",{"#":"IMAGE: Images/water.png"},["ev",{"^->":"water.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"water.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"bathroom":[["^Your pup went potty!","\n",{"#":"IMAGE: Images/bathroom.png"},["ev",{"^->":"bathroom.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathroom.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"walk":[["^What a nice day for a walk!","\n",{"#":"IMAGE: Images/Walks.png"},["ev",{"^->":"walk.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"walk.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"brush":[["^Oof thats a lotta hair..","\n",{"#":"IMAGE: Images/Brush.png"},["ev",{"^->":"brush.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"brush.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"play":[["^what would you like to play?","\n",["ev",{"^->":"play.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Fetch ",{"->":"$r","var":true},null]}],["ev",{"^->":"play.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Frisbee ",{"->":"$r","var":true},null]}],["ev",{"^->":"play.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Tug Of War ",{"->":"$r","var":true},null]}],["ev",{"^->":"play.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Tricks ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"play.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"fetch"},"\n",{"#f":5}],"c-1":["ev",{"^->":"play.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"frisbee"},"\n",{"#f":5}],"c-2":["ev",{"^->":"play.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"tugofwar"},"\n",{"#f":5}],"c-3":["ev",{"^->":"play.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"->":"tricks"},"\n",{"#f":5}]}],{"#f":1}],"fetch":[["ev",1,4,"rnd","/ev",{"VAR=":"fetchInt","re":true},"\n","ev",{"VAR?":"fetchInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They caught it!","\n",{"#":"IMAGE: Images/caught.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"fetchInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They missed it...","\n",{"#":"IMAGE: Images/missed.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.21"},null]}],"nop","\n","ev",{"VAR?":"fetchInt"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They forgot it!","\n",{"#":"IMAGE: Images/forgot_The_Ball.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.29"},null]}],"nop","\n","ev",{"VAR?":"fetchInt"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They swallowed it!","\n",{"#":"IMAGE: Images/Swallowed.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.37"},null]}],"nop","\n",["ev",{"^->":"fetch.0.39.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"fetch.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.39.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"frisbee":[[["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^ You threw a frisbee at your dog. They caught it!",{"->":".^.^.17"},null],"s1":["pop","^ You threw a frisbee at your dog. They missed it...",{"->":".^.^.17"},null],"#f":5}],"\n",{"#":"AUDIO: audio/Play.mp3"},["ev",{"^->":"frisbee.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"frisbee.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"tugofwar":[[["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^ You played Tug of War with your dog. You won!",{"->":".^.^.17"},null],"s1":["pop","^ You played Tug of War with your dog. You lost! ",{"->":".^.^.17"},null],"#f":5}],"\n",{"#":"AUDIO: audio/Angry Bark 2.wav"},["ev",{"^->":"tugofwar.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"tugofwar.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"tricks":[[["ev","visit",5,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^ Your dog played dead! ",{"->":".^.^.35"},null],"s1":["pop","^ Your dog rolled over! ",{"->":".^.^.35"},null],"s2":["pop","^ Your dog gave you a handshake! ",{"->":".^.^.35"},null],"s3":["pop","^ You dog spoke to you! ",{"->":".^.^.35"},null],"s4":["pop","^ Your dog gave you a kiss!",{"->":".^.^.35"},null],"#f":5}],"\n",{"#":"AUDIO: audio/Bark 2.wav"},["ev",{"^->":"tricks.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"tricks.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev","str","^trick","/str",{"VAR=":"name"},0,{"VAR=":"fetchInt"},"/ev","end",null],"#f":1}],"listDefs":{}};