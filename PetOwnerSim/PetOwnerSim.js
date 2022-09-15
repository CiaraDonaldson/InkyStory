var storyContent = ﻿{"inkVersion":20,"root":[["\n","\n","\n","^Welcome to Pet Owner Simulator!","\n",{"->":"choosepet"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"choosepet":[["ev","str","^Chihuahua","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^German Shepard","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"whattodoc"},"\n",{"#f":5}],"c-1":["^ ",{"->":"whattodo"},"\n",{"#":"IMAGE: Images/Adopt.png"},{"#":"IMAGE: Images/Adopt C.png"},{"#f":5}]}],{"#f":1}],"whattodo":[["ev","str","^play","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^care","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"play"},"\n",{"#f":5}],"c-1":["^ ",{"->":"care"},"\n",{"#f":5}]}],{"#f":1}],"whattodoc":[["ev","str","^play","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^care","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"playc"},"\n",{"#f":5}],"c-1":["^ ",{"->":"carec"},"\n",{"#":"AUDIO: audio/Dog bark.wav"},"end",{"#f":5}]}],{"#f":1}],"care":[["^How would you like to care for your dog?","\n","ev","str","^bathe","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^feed","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^water","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^bathroom","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^walk","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^brush","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["^ ",{"->":"bathe"},"\n",{"#f":5}],"c-1":["^ ",{"->":"feed"},"\n",{"#f":5}],"c-2":["^ ",{"->":"water"},"\n",{"#f":5}],"c-3":["^ ",{"->":"bathroom"},"\n",{"#f":5}],"c-4":["^ ",{"->":"walk"},"\n",{"#f":5}],"c-5":["^ ",{"->":"brush"},"\n","end",{"#f":5}]}],{"#f":1}],"bathe":[["^What a lovely bath you got all wet too.","\n",{"#":"IMAGE: Images/bathe.png"},{"#":"AUDIO: audio/Sad Bar.wav"},["ev",{"^->":"bathe.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathe.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"feed":[["^Your dog ate all the food!","\n",{"#":"IMAGE: Images/Feed.png"},{"#":"AUDIO:AUDIO/245039__kwahmah-02__dog-eating.wav"},["ev",{"^->":"feed.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"feed.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"water":[["^Wow drank the water so fast it's all on the floor!","\n",{"#":"IMAGE: Images/water.png"},{"#":"AUDIO:AUDIO/433709__dersuperanton__dog-drinking-water.wav"},["ev",{"^->":"water.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"water.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"bathroom":[["^Your pup went potty!","\n",{"#":"IMAGE: Images/bathroom.png"},{"#":"AUDIO:AUDIO/274448__lorenzgillner__toilet-flushing.wav"},["ev",{"^->":"bathroom.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathroom.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"walk":[["^What a nice day for a walk!","\n",{"#":"IMAGE: Images/Walks.png"},{"#":"AUDIO:AUDIO/461559__slv1__dog-leash.wav"},["ev",{"^->":"walk.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"walk.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"brush":[["^Oof thats a lotta hair..","\n",{"#":"IMAGE: Images/Brush.png"},{"#":"AUDIO:AUDIO/389452__lzmraul__brushing.wav"},["ev",{"^->":"brush.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"brush.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"play":[["^what would you like to play?","\n","ev","str","^Fetch","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Frisbee","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Tug Of War","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Tricks","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ",{"->":"fetch"},"\n",{"#f":5}],"c-1":["^ ",{"->":"frisbee"},"\n",{"#f":5}],"c-2":["^ ",{"->":"tugofwar"},"\n",{"#f":5}],"c-3":["^ ",{"->":"tricks"},"\n",{"#f":5}]}],{"#f":1}],"fetch":[["ev",1,4,"rnd","/ev",{"VAR=":"playInt","re":true},"\n","ev",{"VAR?":"playInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They caught it!","\n",{"#":"IMAGE: Images/caught.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"playInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They missed it...","\n",{"#":"IMAGE: Images/missed.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.21"},null]}],"nop","\n","ev",{"VAR?":"playInt"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They forgot it!","\n",{"#":"IMAGE: Images/forgot_The_Ball.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.29"},null]}],"nop","\n","ev",{"VAR?":"playInt"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They swallowed it!","\n",{"#":"IMAGE: Images/Swallowed.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.37"},null]}],"nop","\n",["ev",{"^->":"fetch.0.39.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"fetch.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.39.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"frisbee":[["ev",1,2,"rnd","/ev",{"VAR=":"playInt","re":true},"\n","ev",{"VAR?":"playInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a frisbee at your dog. They caught it!","\n",{"#":"IMAGE: Images/Frisbee_caught.png"},{"#":"AUDIO: audio/Play.mp3"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"playInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a frisbee at your dog. They missed it...","\n",{"#":"IMAGE: Images/frisbee_missed.png"},{"#":"AUDIO: audio/Play.mp3"},{"->":".^.^.^.21"},null]}],"nop","\n",["ev",{"^->":"frisbee.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"frisbee.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"tugofwar":[["ev",1,2,"rnd","/ev",{"VAR=":"playInt","re":true},"\n","ev",{"VAR?":"playInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You played Tug of War with your dog. You won!","\n",{"#":"IMAGE: Images/tug_of_War_Lose.png"},{"#":"AUDIO: audio/Angry Bark 2.wav"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"playInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You played Tug of War with your dog. You lost!","\n",{"#":"IMAGE: Images/tug_of_War_Lose.png"},{"#":"AUDIO: audio/Angry Bark 2.wav"},{"->":".^.^.^.21"},null]}],"nop","\n",["ev",{"^->":"tugofwar.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"tugofwar.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"tricks":[["ev",1,5,"rnd","/ev",{"VAR=":"playInt","re":true},"\n","ev",{"VAR?":"playInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your dog played dead!","\n",{"#":"IMAGE: Images/play_dead.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"playInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your dog rolled over!","\n",{"#":"IMAGE: Images/roll_over.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.21"},null]}],"nop","\n","ev",{"VAR?":"playInt"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your dog gave you a handshake!","\n",{"#":"IMAGE: Images/shake.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.29"},null]}],"nop","\n","ev",{"VAR?":"playInt"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You dog spoke to you!","\n",{"#":"IMAGE: Images/speak.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.37"},null]}],"nop","\n","ev",{"VAR?":"playInt"},5,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your dog gave you a kiss!","\n",{"#":"IMAGE: Images/kiss.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.45"},null]}],"nop","\n",["ev",{"^->":"tricks.0.47.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"tricks.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.47.s"},[{"#n":"$r2"}],{"->":"whattodo"},"\n","end",{"#f":5}]}],{"#f":1}],"carec":[["^How would you like to care for your dog?","\n","ev","str","^bathe","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^feed","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^water","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^bathroom","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^walk","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^brush","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["^ ",{"->":"bathec"},"\n",{"#f":5}],"c-1":["^ ",{"->":"feedc"},"\n",{"#f":5}],"c-2":["^ ",{"->":"waterc"},"\n",{"#f":5}],"c-3":["^ ",{"->":"bathroomc"},"\n",{"#f":5}],"c-4":["^ ",{"->":"walkc"},"\n",{"#f":5}],"c-5":["^ ",{"->":"brushc"},"\n","end",{"#f":5}]}],{"#f":1}],"bathec":[["^What a lovely bath you got all wet too.","\n",{"#":"IMAGE: Images/bathe C.png"},{"#":"AUDIO: audio/Sad Bar.wav"},["ev",{"^->":"bathec.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathec.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"feedc":[["^Your dog ate all the food!","\n",{"#":"IMAGE: Images/Feed C.png"},{"#":"AUDIO:AUDIO/245039__kwahmah-02__dog-eating.wav"},["ev",{"^->":"feedc.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"feedc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"waterc":[["^Wow drank the water so fast it's all on the floor!","\n",{"#":"IMAGE: Images/water C.png"},{"#":"AUDIO:AUDIO/433709__dersuperanton__dog-drinking-water.wav"},["ev",{"^->":"waterc.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"waterc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"bathroomc":[["^Your pup went potty!","\n",{"#":"IMAGE: Images/bathroom C.png"},{"#":"AUDIO:AUDIO/274448__lorenzgillner__toilet-flushing.wav"},["ev",{"^->":"bathroomc.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"bathroomc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"walkc":[["^What a nice day for a walk!","\n",{"#":"IMAGE: Images/Walks C.png"},{"#":"AUDIO:AUDIO/461559__slv1__dog-leash.wav"},["ev",{"^->":"walkc.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"walkc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"brushc":[["^Oof thats a lotta hair..","\n",{"#":"IMAGE: Images/Brush C.png"},{"#":"AUDIO:AUDIO/389452__lzmraul__brushing.wav"},["ev",{"^->":"brushc.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"brushc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"playc":[["^what would you like to play?","\n","ev","str","^Fetch","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Frisbee","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Tug Of War","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Tricks","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ",{"->":"fetchc"},"\n",{"#f":5}],"c-1":["^ ",{"->":"frisbeec"},"\n",{"#f":5}],"c-2":["^ ",{"->":"tugofwarc"},"\n",{"#f":5}],"c-3":["^ ",{"->":"tricksc"},"\n",{"#f":5}]}],{"#f":1}],"fetchc":[["ev",1,4,"rnd","/ev",{"VAR=":"playInt","re":true},"\n","ev",{"VAR?":"playInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They caught it!","\n",{"#":"IMAGE: Images/caught C.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"playInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They missed it...","\n",{"#":"IMAGE: Images/missed C.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.21"},null]}],"nop","\n","ev",{"VAR?":"playInt"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They forgot it!","\n",{"#":"IMAGE: Images/forgot_The_Ball C.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.29"},null]}],"nop","\n","ev",{"VAR?":"playInt"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a ball for your dog to fetch. They swallowed it!","\n",{"#":"IMAGE: Images/Swallowed C.png"},{"#":"AUDIO: audio/Squeaky.wav"},{"->":".^.^.^.37"},null]}],"nop","\n",["ev",{"^->":"fetchc.0.39.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"fetchc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.39.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"frisbeec":[["ev",1,2,"rnd","/ev",{"VAR=":"playInt","re":true},"\n","ev",{"VAR?":"playInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a frisbee at your dog. They caught it!","\n",{"#":"IMAGE: Images/Frisbee_caught_C.png"},{"#":"AUDIO: audio/Play.mp3"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"playInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You threw a frisbee at your dog. They missed it...","\n",{"#":"IMAGE: Images/frisbee_missed_C.png"},{"#":"AUDIO: audio/Play.mp3"},{"->":".^.^.^.21"},null]}],"nop","\n",["ev",{"^->":"frisbeec.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"frisbeec.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"tugofwarc":[["ev",1,2,"rnd","/ev",{"VAR=":"playInt","re":true},"\n","ev",{"VAR?":"playInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You played Tug of War with your dog. You won!","\n",{"#":"IMAGE: Images/tug_of_war_win C.png"},{"#":"AUDIO: audio/Angry Bark 2.wav"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"playInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You played Tug of War with your dog. You lost!","\n",{"#":"IMAGE: Images/tug_of_War_Lose C.png"},{"#":"AUDIO: audio/Angry Bark 2.wav"},{"->":".^.^.^.21"},null]}],"nop","\n",["ev",{"^->":"tugofwarc.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"tugofwarc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"tricksc":[["ev",1,5,"rnd","/ev",{"VAR=":"playInt","re":true},"\n","ev",{"VAR?":"playInt"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your dog played dead!","\n",{"#":"IMAGE: Images/play_dead C.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"VAR?":"playInt"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your dog rolled over!","\n",{"#":"IMAGE: Images/roll_over C.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.21"},null]}],"nop","\n","ev",{"VAR?":"playInt"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your dog gave you a handshake!","\n",{"#":"IMAGE: Images/shake C.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.29"},null]}],"nop","\n","ev",{"VAR?":"playInt"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You dog spoke to you!","\n",{"#":"IMAGE: Images/speak C.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.37"},null]}],"nop","\n","ev",{"VAR?":"playInt"},5,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Your dog gave you a kiss!","\n",{"#":"IMAGE: Images/kiss C.png"},{"#":"AUDIO: audio/Bark 2.wav"},{"->":".^.^.^.45"},null]}],"nop","\n",["ev",{"^->":"tricksc.0.47.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^what to do next? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"tricksc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.47.s"},[{"#n":"$r2"}],{"->":"whattodoc"},"\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev","str","^trick","/str",{"VAR=":"name"},0,{"VAR=":"playInt"},"/ev","end",null],"#f":1}],"listDefs":{}};