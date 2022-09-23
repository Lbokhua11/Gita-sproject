let tips = ["Stop Comparing Yourself to Others","Surround Yourself With Positive People","Take Care of Your Body",
"Be Kind to Yourself","Practice Positive Self-Talk","Face Your Fears",
"Do Things You're Good At","Know When to Say No","Set Realistic Goals"];

let textRe = ["Do you compare how you look to people you follow on Instagram?\n" +
            "Or maybe you compare your salary to what your friend earns. \n" +
            "Social comparison theory explains that making comparisons is natural.\n" +
            "But it ,isnt likely to help boost your self-confidence. It may even have the opposite effect. \n" +
            "A 2018 study published in Personality and Individual Differences found a direct link between envy and the way\n" +
            "we feel about ourselves.5 Specifically, researchers noted that when people compare themselves to others, they \n" +
            " experience envy. And the more envy they have, the worse they feel about themselves.\n" +
            "How do you build self-confidence when you notice that you are drawing comparisons? First, \n"+
            "remind yourself that doing so isnt helpful. Everyone is running their own race and life isnt a competition.\n"+
            "If you are feeling envious of someone elses life, its also helpful to remember your own \n" +
            "strengths and successes. Keep a gratitude journal to better recall the areas in life where you are blessed. \n"+
            "This can help you focus on your own life versus focusing on the lives of others.",
            "Take a moment and think about how your friends make you feel. Do they lift you up, or do they bring you down?\n "+
            "Are they constantly judging you, or do they accept you for who you are? \n" +
            "The people you spend time with can influence your thoughts and attitudes about yourself, \n" +
            "perhaps more than you realize. So, pay attention to how others make you feel.\n" +
             "If you feel bad about yourself after hanging out with a particular person, it may be time to say goodbye. \n " +         
            "Instead, surround yourself with people who love you and want the best for you.\n" +
            "Seek out others who are positive and can help build your confidence.\n" +
             "Self-confidence and a positive attitude go hand-in-hand \n",
             "This tip for how to be more confident is based on the idea that \n "+
              "it’s hard to feel good about yourself if you’re abusing your body. \n" +
             " When you practice self-care, you know you're doing something positive for your mind, body,\n" +
             " and spirit—and you'll naturally feel more confident as a result.",
             "Self-compassion involves treating yourself with kindness when you make a mistake,\n" +
            "fail, or experience a setback. It allows you to become more emotionally flexible\n" +
            "and helps you better navigate challenging emotions, enhancing your connection to yourself and others.\n "+
            " A 2015 study connects self-compassion with self-confidence.10 So the next time \n" +
             "you're in a challenging situation, recognize that being imperfect or falling \n "+
             "short at times is a part of being human. Do your best to navigate these experiences with compassion toward yourself.\n",
             "Negative self-talk can limit your abilities and lessen your self-confidence\n" +
              "by convincing your subconscious that you 'can't handle' something or that it is\n "+
               "too hard and you shouldn't even try. 11 Self-talk that is optimistic,\n" +
                "on the other hand, can foster self-compassion and help you overcome self-doubt and take on new challenges.\n" +
             "The next time you begin to think that you have no business speaking up \n" +
            " in a meeting or that you are too out of shape to work out, remind yourself that your\n "+
               " thoughts aren’t always accurate. Then find a way to turn those thoughts around into more positive self-talk.\n",
               "Stop putting things off until you feel more self-confident—like asking \n" +
                "someone on a date or applying for a promotion. One of the best ways to\n" +
                 "build your confidence in these situations is by facing your fears head-on.\n" +
               "Practice facing some of your fears that stem from a lack of self-confidence.\n" +
               "If you’re afraid you’ll embarrass yourself or think that you’re going to mess up,\n" +
               "try anyway. A little self-doubt can even help improve performance.\n" +
               "Tell yourself it’s just an experiment and see what happens.\n" +
                "You might learn that being a little anxious or making a few mistakes isn’t as bad as you thought. \n" +
               "And each time you move forward, you gain more confidence in yourself. In the end,\n" +
              "this can help prevent you from taking risks that will result in major negative consequences ",
              "What happens when you do things that you are good at? Your self-confidence starts to soar.\n" +
               "Your strengths become even stronger, which helps improve your belief in yourself. \n" +
               "Taking this approach also has another benefit: it can increase how satisfied you are with your life.\n" +
            "One study found that believing in your ability to build on your personal strengths\n" +
            "is moderately related to life satisfaction levels.15 This starts with identifying \n" +
            "what those strengths are. Then, work to make them stronger by engaging with them regularly.\n" +
            "If you're good at a certain sport, for instance, make it a point to train\n" +
               " or play at least once a week. If you're good at a particular task at work, \n" +
                "try to do that task more often. Building on your strengths can also help you build your self-confidence." , 
                "While doing things you're good at can give your self-confidence a boost,\n "+ 
                "it's equally important to recognize situations that can cause your confidence to plummet.\n" + 
                " Maybe you find that every time you participate in a certain activity,\n" + 
                  "you feel worse about yourself instead of better.\n" + 
                "Saying no to activities that tend to zap your self-confidence is okay.\n" + 
                "Certainly, you don't want to avoid doing anything that makes you feel\n "+ 
                "uncomfortable because discomfort is often part of the personal growth process. \n" + 
                "At the same time, there's nothing wrong with knowing your boundaries and sticking to them." ,
                "Pursuing your goals often involves failing several times until you figure out what works.\n" + 
                "This can make you wonder if you have what it takes to succeed\n "+ 
                 "It can also leave you questioning how to be more confident while still achieving your dreams\n" + 
                 " The answer lies in setting realistic goals\n "+ 
           " Setting high-reaching goals and failing to achieve them has been found to damage confidence levels\n" + 
            "Conversely, realistic goals are achievable. And the more you achieve your goals, \n" + 
            "the greater your confidence in yourself and your abilities." ,
            ];
    
           
            let randomSrc = ["images/StopComparing.webp","images/SurroundYourself.png","images/TakeCare.jpg","images/BeKind.jfif",
            "images/SelfTalk.png","images/Fear.jpg","images/GoodAt.jpg","images/SayNo.png","images/Realistic.jpg"];
            let result = Math.floor(Math.random()*tips.length);
            let finalResult = tips[result];
            document.getElementById("tipResult").innerHTML = finalResult;
            switch(result){
                case 0:
                    document.getElementById("resultText").innerHTML = textRe[0];
                    $("#getSrc").attr("src", randomSrc[0])
                break;
                case 1:
                    document.getElementById("resultText").innerHTML = textRe[1];
                    $("#getSrc").attr("src", randomSrc[1])
                break;
                case 2:
                    document.getElementById("resultText").innerHTML = textRe[2];
                    $("#getSrc").attr("src", randomSrc[2])
                break;
                case 3:
                    document.getElementById("resultText").innerHTML = textRe[3];
                    $("#getSrc").attr("src", randomSrc[3])
                break;
                case 4:
                    document.getElementById("resultText").innerHTML = textRe[4];
                    $("#getSrc").attr("src", randomSrc[4])
                break;
                case 5:
                    document.getElementById("resultText").innerHTML = textRe[5];
                    $("#getSrc").attr("src", randomSrc[5])
                break;
                case 6:
                    document.getElementById("resultText").innerHTML = textRe[6];
                    $("#getSrc").attr("src", randomSrc[6])
                break;
        
                case 7:
                    document.getElementById("resultText").innerHTML = textRe[7];
                    $("#getSrc").attr("src", randomSrc[7])
                break;
        
                case 8:
                    document.getElementById("resultText").innerHTML = textRe[8];
                    $("#getSrc").attr("src", randomSrc[8])
                break;
            }

$( ".boxofquote.active" )
.click(function() {
    let result = Math.floor(Math.random()*tips.length);
    let finalResult = tips[result];
    document.getElementById("tipResult").innerHTML = finalResult;
    switch(result){
        case 0:
            document.getElementById("resultText").innerHTML = textRe[0];
            $("#getSrc").attr("src", randomSrc[0])
        break;
        case 1:
            document.getElementById("resultText").innerHTML = textRe[1];
            $("#getSrc").attr("src", randomSrc[1])
        break;
        case 2:
            document.getElementById("resultText").innerHTML = textRe[2];
            $("#getSrc").attr("src", randomSrc[2])
        break;
        case 3:
            document.getElementById("resultText").innerHTML = textRe[3];
            $("#getSrc").attr("src", randomSrc[3])
        break;
        case 4:
            document.getElementById("resultText").innerHTML = textRe[4];
            $("#getSrc").attr("src", randomSrc[4])
        break;
        case 5:
            document.getElementById("resultText").innerHTML = textRe[5];
            $("#getSrc").attr("src", randomSrc[5])
        break;
        case 6:
            document.getElementById("resultText").innerHTML = textRe[6];
            $("#getSrc").attr("src", randomSrc[6])
        break;

        case 7:
            document.getElementById("resultText").innerHTML = textRe[7];
            $("#getSrc").attr("src", randomSrc[7])
        break;

        case 8:
            document.getElementById("resultText").innerHTML = textRe[8];
            $("#getSrc").attr("src", randomSrc[8])
        break;
    }
})
var typed = new Typed('.element', {
    strings: ['Productive', 'Succesful'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
    loop: true,
    loopCount: Infinity,
    startDelay:1000
  });