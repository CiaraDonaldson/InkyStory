==care==
How would you like to care for your dog?
+[bathe] ->bathe
+[feed] ->feed
+[water] ->water
+[bathroom] ->bathroom
+[walk] ->walk
+[brush] ->brush

->END

==bathe==
What a lovely bath! You got all wet too!
# IMAGE: Images/bathe.png
# AUDIO: audio/Sad Bark.wav
~Stamina += 1
+You're starting to wonder if you got more wet than the dog? What should you two do next? ->whattodo

->END

==feed==
Your dog ate all of the food!
# IMAGE: Images/Feed.png
# AUDIO:AUDIO/245039__kwahmah-02__dog-eating.wav
~Stamina += 1
+What a clean eater...what to do next? ->whattodoc

->END
==water==
Wow, they drank the water so fast it's all over the floor!
# IMAGE: Images/water.png
# AUDIO:AUDIO/433709__dersuperanton__dog-drinking-water.wav
~Stamina += 1
+Where did you keep that mop again? Anyway what should you do next? ->whattodoc
->END

==bathroom==
Your pup went potty!
# IMAGE: Images/bathroom.png
# AUDIO:AUDIO/274448__lorenzgillner__toilet-flushing.wav
~Stamina += 1
+Someone deserves a treat! What to do next? ->whattodoc
->END

==walk==
What a nice day for a walk!
# IMAGE: Images/Walks.png
# AUDIO:AUDIO/461559__slv1__dog-leash.wav
~Stamina += 1
+Or it would be if someone would stop chasing squirrels....what to do next? ->whattodoc
->END
==brush==
Oof, that's a lotta hair..
# IMAGE: Images/Brush.png
# AUDIO:AUDIO/389452__lzmraul__brushing.wav
~Stamina += 1
+What a dapper looking doggie. What to do next? ->whattodoc
-> END
