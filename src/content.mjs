// THE FOSTER FILES — content for 15 carousels.
// Voice: calm-assertive, masculine, tough-love. Energy first, structure second, affection third.
// Ranked by what new-dog & foster people care about most.

export const BRAND = {
  series: "THE FOSTER FILES",
  handle: "@thehappyhuntinggrounds",
  wordmark: "THE HAPPY HUNTING GROUNDS",
  thesis: "Drain the energy · Set the rules · Then love",
};

// photo keys map to assets/photos/<key>_<treat>.jpg  (treat: color | bw)
export const CAROUSELS = [
  /* 01 ───────────────────────────────────────────────────────── */
  {
    id: "01-first-72-hours", no: "01", slug: "Decompression",
    slides: [
      { type:"cover", topic:"THE FIRST 72 HOURS",
        title:[["HE","plain"],["WASN'T","box"],["PERFECT","red"],["—","plain"],["HE","plain"],["WAS","plain"],["SHUT","out"],["DOWN","box"]],
        sub:"Why your new foster “gets worse” after a good first week.",
        photo:{key:"hero", treat:"color", cap:"day one → day done"} },
      { type:"truth", kicker:"THE FIRST 72 HOURS",
        lines:[["A foster dog is","plain"],["NOT A FINISHED","ink"],["DOG.","red"]],
        foot:"The first 3 days aren’t training. They’re decompression. You’re proving the world is safe — and boring." },
      { type:"mistake", kicker:"GET THIS RIGHT FIRST",
        wrong:{ mk:"DON’T", t:"Flood the new dog with love, visitors, freedom and excitement to “help them feel at home.”" },
        good:{ mk:"DO", t:"Shrink their world. Quiet room, a covered crate as a den, low stimulation. Let them be bored and safe." } },
      { type:"steps", kicker:"THE 72-HOUR PLAYBOOK", title:"PROVE IT’S SAFE",
        steps:[
          {n:"1",h:"DRAIN, DON’T DRILL", t:"One structured leash walk to burn nervous energy before you ask for anything."},
          {n:"2",h:"LET THEM HIDE", t:"Don’t drag a scared dog out. Sit nearby doing nothing. Let them close the distance."},
          {n:"3",h:"FOOD DOWN, THEN UP", t:"15–20 min, calm energy, no hovering. Hunger in a stressed dog is normal."},
          {n:"4",h:"KEEP IT BORING", t:"Same routine, same quiet potty spot, no tour of the neighborhood. Predictable is medicine."},
        ] },
      { type:"quote", kicker:"TRANSLATED",
        said:"“He was perfect yesterday — now he’s a different dog.”",
        means:"He was shut down yesterday. Today he feels safe enough to act like himself. That’s good news, even when it doesn’t feel like it. Re-tighten the structure and meet the real dog." },
      { type:"closer", kicker:"THE FIRST 72 HOURS",
        mantra:[["DRAIN THE ENERGY.","plain"],["SET THE RULES.","plain"],["THEN LOVE.","red"]],
        cta:"Fostering your first dog? SAVE this for night one.",
        photo:{key:"kiss", treat:"bw"} },
    ],
  },

  /* 02 ───────────────────────────────────────────────────────── */
  {
    id: "02-potty-accidents", no: "02", slug: "House Training",
    slides: [
      { type:"cover", topic:"ACCIDENTS IN THE HOUSE",
        title:[["IT’S","plain"],["NOT","box"],["SPITE.","red"],["IT’S","plain"],["A","plain"],["BROKEN","out"],["ROUTINE.","box"]],
        sub:"Dogs live in the moment. They don’t connect the puddle to your face.",
        photo:{key:"merch", treat:"color", cap:"rescue → routine"} },
      { type:"truth", kicker:"HOUSE TRAINING",
        lines:[["DOGS DON’T READ","ink"],["MINDS.","plain"],["THEY READ","plain"],["PATTERNS.","red"]],
        foot:"Punishing an accident after the fact teaches fear, not bladder control. Build the pattern instead." },
      { type:"steps", kicker:"BUILD THE PATTERN", title:"THE POTTY ROUTINE",
        steps:[
          {n:"1",h:"OUT ON A CLOCK", t:"After waking, eating, playing — and on a timer in between. Don’t wait for a signal."},
          {n:"2",h:"SAME SPOT, SAME WORD", t:"On leash, no chatter, one quiet spot. The second they go — calm praise."},
          {n:"3",h:"SUPERVISE OR CRATE", t:"No unsupervised roaming until it’s earned. You can’t fix what you don’t see."},
          {n:"4",h:"ENZYME CLEANER ONLY", t:"Ammonia smells like pee and invites repeats. Kill the scent, kill the habit."},
        ] },
      { type:"mistake", kicker:"WHEN IT SLIPS",
        wrong:{ mk:"DON’T", t:"Take regression personally or rub their nose in it. A dog “losing” house training a week in isn’t being bad." },
        good:{ mk:"DO", t:"Reset to day one. Decompression wore off and the real dog showed up. Re-tighten the structure, stay calm." } },
      { type:"closer", kicker:"HOUSE TRAINING",
        mantra:[["ROUTINE","plain"],["IS","plain"],["EVERYTHING.","red"]],
        cta:"Tag a foster who needs to hear “it’s not spite.”",
        photo:{key:"hero", treat:"bw"} },
    ],
  },

  /* 03 ───────────────────────────────────────────────────────── */
  {
    id: "03-crate-crying", no: "03", slug: "Crate & Sleep",
    slides: [
      { type:"cover", topic:"CRYING IN THE CRATE",
        title:[["DON’T","box"],["OPEN","plain"],["THE","plain"],["DOOR","out"],["MID-","plain"],["CRY.","red"]],
        sub:"Open it while they’re screaming and you just taught: noise = freedom.",
        photo:{key:"kiss", treat:"color", cap:"calm makes calm"} },
      { type:"truth", kicker:"CRATE & SLEEP",
        lines:[["A RESTLESS","plain"],["NIGHT","red"],["IS AN UNDER-","ink"],["WORKED DAY.","plain"]],
        foot:"Most night crying isn’t the crate. It’s a body and brain that never got tired. Fix the day to fix the night." },
      { type:"steps", kicker:"SLEEP THROUGH THE NIGHT", title:"WIND IT DOWN",
        steps:[
          {n:"1",h:"TIRE BEFORE BED", t:"Exercise + mental work earlier in the evening. A drained dog settles itself."},
          {n:"2",h:"REWARD THE PAUSE", t:"Wait for a break in the crying, then reward the quiet. Never the noise."},
          {n:"3",h:"MAKE IT A DEN", t:"Crate near you at first, cover it. Dark and close beats far and exposed."},
          {n:"4",h:"HOLD THE LINE AT DAWN", t:"Don’t spring up the second they stir. Engaging early teaches early."},
        ] },
      { type:"mistake", kicker:"THE TRAP",
        wrong:{ mk:"DON’T", t:"Cave at 2am because the whining is “breaking your heart.” One rescue at the wrong moment rewrites the rule." },
        good:{ mk:"DO", t:"Be boring and consistent. Calm in you comes before calm in them. Your steadiness is the training." } },
      { type:"closer", kicker:"CRATE & SLEEP",
        mantra:[["REWARD","plain"],["THE","plain"],["QUIET.","red"]],
        cta:"SAVE this before the first crate night.",
        photo:{key:"merch", treat:"bw"} },
    ],
  },

  /* 04 ───────────────────────────────────────────────────────── */
  {
    id: "04-separation-anxiety", no: "04", slug: "Separation Anxiety",
    slides: [
      { type:"cover", topic:"WHEN YOU LEAVE",
        title:[["“ONLY","plain"],["WHEN","box"],["I’M","plain"],["GONE”","red"],["ISN’T","out"],["SPITE.","box"]],
        sub:"The barking, the chewing, the accident by the door — that’s panic, not payback.",
        photo:{key:"hero", treat:"color", cap:"build independence"} },
      { type:"truth", kicker:"SEPARATION ANXIETY",
        lines:[["MAKE COMINGS","plain"],["& GOINGS","plain"],["BORING.","red"]],
        foot:"No emotional goodbyes. No dramatic reunions. The bigger the drama, the bigger the gap you leave behind." },
      { type:"steps", kicker:"SHRINK THE PANIC", title:"BUILD THE ALONE MUSCLE",
        steps:[
          {n:"1",h:"DRAIN FIRST", t:"A tired dog left alone is a sleeping dog. Walk before you walk out."},
          {n:"2",h:"PRACTICE SHORT", t:"Leave for 30 seconds. Then 5 minutes. Stretch it. Don’t jump to 8 hours."},
          {n:"3",h:"A LEGAL CHEW OUTLET", t:"Give the mouth a job so it can’t rehearse the panic on your couch."},
          {n:"4",h:"TEACH A “PLACE”", t:"Reward holding a spot while you move around. Independence on purpose."},
        ] },
      { type:"quote", kicker:"TRANSLATED",
        said:"“She follows me into every single room.”",
        means:"Sweet now — anxiety later. Don’t reward the shadow with constant touch. Build independence before the velcro hardens into panic." },
      { type:"closer", kicker:"SEPARATION ANXIETY",
        mantra:[["NO DRAMA","plain"],["IN.","red"],["NO DRAMA","plain"],["OUT.","red"]],
        cta:"Know a dog that screams when alone? Send them this.",
        photo:{key:"kiss", treat:"bw"} },
    ],
  },

  /* 05 ───────────────────────────────────────────────────────── */
  {
    id: "05-leash-pulling", no: "05", slug: "Leash & Reactivity",
    slides: [
      { type:"cover", topic:"PULLING & REACTIVITY",
        title:[["THE","plain"],["LEASH","box"],["IS","plain"],["A","plain"],["PHONE","red"],["LINE.","out"]],
        sub:"Whatever you’re feeling travels straight down it. Tighten up and so do they.",
        photo:{key:"merch", treat:"color", cap:"you own the pace"} },
      { type:"truth", kicker:"LEASH WALKING",
        lines:[["FORWARD ONLY","plain"],["HAPPENS","ink"],["WHEN IT’S","plain"],["LOOSE.","red"]],
        foot:"The leash never goes forward while it’s tight. You own the pace and the direction. Walk like you have somewhere to be." },
      { type:"steps", kicker:"FIX THE WALK", title:"OWN THE PACE",
        steps:[
          {n:"1",h:"STOP THE TIGHT LINE", t:"Tight leash = you stop. Loose leash = you move. Be a boring, immovable rule."},
          {n:"2",h:"DON’T YANK A FREEZE", t:"Release pressure, encourage, wait for one step, reward it. Confidence in tiny pieces."},
          {n:"3",h:"DISTANCE IS MEDICINE", t:"Stay far enough from the trigger that the dog can still think and take food."},
          {n:"4",h:"REDIRECT BEFORE THE LOCK", t:"Break focus before the stare fixates. Keep your own energy loose."},
        ] },
      { type:"mistake", kicker:"REACTIVITY",
        wrong:{ mk:"DON’T", t:"March straight up to the other dog to “socialize” and tighten the leash when yours tenses." },
        good:{ mk:"DO", t:"Add distance, stay loose, reward calm. Under threshold is where learning happens. Over it, nobody’s home." } },
      { type:"closer", kicker:"LEASH WALKING",
        mantra:[["LOOSE","plain"],["LEASH,","plain"],["LOOSE","plain"],["MIND.","red"]],
        cta:"SAVE this before your next walk.",
        photo:{key:"hero", treat:"bw"} },
    ],
  },

  /* 06 ───────────────────────────────────────────────────────── */
  {
    id: "06-fearful-dog", no: "06", slug: "The Fearful Dog",
    slides: [
      { type:"cover", topic:"THE SCARED DOG",
        title:[["DON’T","box"],["SOOTHE","red"],["THE","plain"],["FEAR.","out"]],
        sub:"Petting a panicking dog and cooing tells them they were right to panic.",
        photo:{key:"kiss", treat:"color", cap:"let them choose"} },
      { type:"truth", kicker:"FEAR-BASED BEHAVIOR",
        lines:[["BE THE PROOF","plain"],["THAT","plain"],["NOTHING’S","ink"],["WRONG.","red"]],
        foot:"Stay neutral. Your calm body is the message. You’re not comforting the fear — you’re outlasting it." },
      { type:"steps", kicker:"BUILD THE CONFIDENCE", title:"LET THEM OPT IN",
        steps:[
          {n:"1",h:"NO FORCED MEETINGS", t:"Scared of men or strangers? Have people ignore the dog — no eye contact, no hands."},
          {n:"2",h:"LET THEM APPROACH", t:"The dog chooses the distance. Reaching over the head is a threat, not a hello."},
          {n:"3",h:"NEVER DRAG", t:"Won’t cross a doorway or surface? Drop the pressure, reward the first paw, walk it like it’s nothing."},
          {n:"4",h:"LESS IS MORE", t:"Short, calm exposures. Overwhelming a shut-down dog isn’t bravery — it’s a setback."},
        ] },
      { type:"saythis", kicker:"AROUND A FEARFUL DOG", title:"DO THIS, NOT THAT",
        rows:[
          {not:"“It’s okay, it’s okay, don’t be scared…”", yes:"Say nothing. Stay loose. Let your calm do the talking."},
          {not:"Reach over the head to pet", yes:"Touch from the chest or side — and only if they opt in."},
          {not:"“Go say hi!” toward a stranger", yes:"Distance + time + good associations. On the dog’s clock."},
        ] },
      { type:"closer", kicker:"FEAR-BASED BEHAVIOR",
        mantra:[["DON’T","plain"],["SOOTHE","plain"],["IT.","plain"],["OUTLAST IT.","red"]],
        cta:"For anyone with a shut-down rescue — SAVE & share.",
        photo:{key:"merch", treat:"bw"} },
    ],
  },

  /* 07 ───────────────────────────────────────────────────────── */
  {
    id: "07-wont-eat", no: "07", slug: "Won't Eat",
    slides: [
      { type:"cover", topic:"THE DOG THAT WON’T EAT",
        title:[["STOP","red"],["HOVERING","box"],["OVER","plain"],["THE","plain"],["BOWL.","out"]],
        sub:"Worry in your voice is pressure. Pressure kills a stressed dog’s appetite.",
        photo:{key:"hero", treat:"color", cap:"calm = appetite"} },
      { type:"truth", kicker:"FEEDING ISSUES",
        lines:[["HUNGER IN A","plain"],["STRESSED DOG","ink"],["IS","plain"],["NORMAL.","red"]],
        foot:"A new dog skipping a meal isn’t an emergency — it’s decompression. Don’t coax. Don’t panic. Let calm do the work." },
      { type:"steps", kicker:"GET THEM EATING", title:"FOOD DOWN, THEN UP",
        steps:[
          {n:"1",h:"WALK BEFORE MEALS", t:"A short structured walk wakes up the appetite better than any topper."},
          {n:"2",h:"15–20 MINUTES", t:"Put it down calm, no coaxing. Pick it up after. No all-day buffet."},
          {n:"3",h:"MAKE IT EASY", t:"Quiet corner, splash of water or low-sodium broth, no one crowding the bowl."},
          {n:"4",h:"VET THE STUBBORN ONES", t:"If a refusal drags on, rule out the body. Pain shows up as “picky.”"},
        ] },
      { type:"mistake", kicker:"FOOD GUARDING",
        wrong:{ mk:"DON’T", t:"Reach into the bowl or take it away to “show them who’s boss.” That builds the guard you’re afraid of." },
        good:{ mk:"DO", t:"Toss something better as you walk past, so your approach predicts good things. Serious guarding — call your trainer." } },
      { type:"closer", kicker:"FEEDING ISSUES",
        mantra:[["CALM.","red"],["NO","plain"],["HOVERING.","plain"]],
        cta:"New foster not eating? SAVE this for day one.",
        photo:{key:"kiss", treat:"bw"} },
    ],
  },

  /* 08 ───────────────────────────────────────────────────────── */
  {
    id: "08-manners", no: "08", slug: "Manners",
    slides: [
      { type:"cover", topic:"JUMPING & NO MANNERS",
        title:[["BAD","box"],["MANNERS","plain"],["ARE","plain"],["JUST","plain"],["ENERGY","red"],["WITH","plain"],["NO","plain"],["JOB.","out"]],
        sub:"Fix the energy and half of these problems disappear on their own.",
        photo:{key:"merch", treat:"color", cap:"give it a job"} },
      { type:"truth", kicker:"HOUSEHOLD MANNERS",
        lines:[["ATTENTION","plain"],["IS THE","plain"],["REWARD.","red"]],
        foot:"Jumping, counter-surfing, stealing socks — every one of them is paid off by your reaction. Stop paying." },
      { type:"steps", kicker:"RESET THE HOUSE", title:"REWARD FOUR ON THE FLOOR",
        steps:[
          {n:"1",h:"JUMPING? TURN AWAY", t:"Zero attention for jumping. Reward calm. Guests ignore the dog until it settles."},
          {n:"2",h:"DON’T CHASE THE THIEF", t:"Chasing IS the reward. Teach “trade,” redirect to a legal item instead."},
          {n:"3",h:"CLEAR & CLAIM", t:"Counter surfing? Clear the counters, claim the kitchen calmly, reward feet on the floor."},
          {n:"4",h:"A BUSY MIND BEHAVES", t:"Exercise + a legal chew + a job. Boredom is what goes dumpster-diving."},
        ] },
      { type:"mistake", kicker:"AT THE TABLE",
        wrong:{ mk:"DON’T", t:"Feed one scrap from the table “just this once.” One human breaking the rule trains the beggar." },
        good:{ mk:"DO", t:"Never from the table — not once. Send them to “place” during meals. Get every human on the same page." } },
      { type:"closer", kicker:"HOUSEHOLD MANNERS",
        mantra:[["FIX THE","plain"],["ENERGY","red"],["FIRST.","plain"]],
        cta:"SAVE this before your next dinner guests.",
        photo:{key:"hero", treat:"bw"} },
    ],
  },

  /* 09 ───────────────────────────────────────────────────────── */
  {
    id: "09-meeting-pets", no: "09", slug: "Dog Introductions",
    slides: [
      { type:"cover", topic:"MEETING THE RESIDENT DOG",
        title:[["NEVER","red"],["NOSE","box"],["TO","plain"],["NOSE","plain"],["FIRST.","out"]],
        sub:"The worst place to introduce two dogs is face-to-face in the living room.",
        photo:{key:"girls", treat:"color", cap:"meet as a moving pack"} },
      { type:"truth", kicker:"INTRODUCTIONS",
        lines:[["WALK FIRST.","plain"],["MEET","ink"],["SECOND.","red"]],
        foot:"A parallel walk drains energy side-by-side on neutral ground. Then they meet as a moving pack — not two strangers in a box." },
      { type:"steps", kicker:"DO IT RIGHT", title:"THE PARALLEL WALK",
        steps:[
          {n:"1",h:"NEUTRAL GROUND", t:"Not the house, not the yard. Somewhere neither dog owns."},
          {n:"2",h:"WALK SIDE BY SIDE", t:"Drain energy together with space between them before any sniffing."},
          {n:"3",h:"HONOR YOUR DOG FIRST", t:"Greet, feed and leash your resident dog before the foster. Add a guest, don’t replace the king."},
          {n:"4",h:"MANAGE GUARDING & CATS", t:"Feed in separate rooms, pick up high-value toys, gate the cat. Remove triggers while trust builds."},
        ] },
      { type:"saythis", kicker:"READ THE BODIES", title:"PLAY OR PROBLEM?",
        rows:[
          {not:"“Stiff and still? He’s settling in.”", yes:"Stiff, frozen, hard stare = a stop. Interrupt and add space before it tips over."},
          {not:"“They’ll sort it out themselves.”", yes:"Loose, bouncy, taking turns, play-bows = play. Build in breaks."},
          {not:"“The resident dog’s just being dramatic.”", yes:"That’s jealousy talking. Honor their status first and it settles."},
        ] },
      { type:"closer", kicker:"INTRODUCTIONS",
        mantra:[["WALK","plain"],["FIRST.","red"],["MEET","plain"],["SECOND.","red"]],
        cta:"Bringing home a second dog? SAVE this first.",
        photo:{key:"girls", treat:"bw"} },
    ],
  },

  /* 10 ───────────────────────────────────────────────────────── */
  {
    id: "10-the-goodbye", no: "10", slug: "The Goodbye",
    slides: [
      { type:"cover", topic:"THE HARDEST PART",
        title:[["A","plain"],["HARD","box"],["GOODBYE","red"],["MEANS","plain"],["YOU","plain"],["DID","out"],["THE","plain"],["JOB.","box"]],
        sub:"On falling in love with the foster — and letting them go anyway.",
        photo:{key:"kiss", treat:"color", cap:"the bridge home"} },
      { type:"truth", kicker:"EMOTIONAL ATTACHMENT",
        lines:[["I REHABILITATE","plain"],["DOGS.","red"],["I WORK WITH","plain"],["PEOPLE.","ink"]],
        foot:"The love your family feels is the whole point. Keep the mission in front of it: you’re the bridge to the forever home." },
      { type:"saythis", kicker:"THE GOODBYE", title:"REFRAME IT",
        rows:[
          {not:"“I could never foster — I’d get too attached.”", yes:"That attachment is the job. The hard goodbye means you loved them well."},
          {not:"“Letting them go feels like a loss.”", yes:"Letting one go is how you save the next one. The kennel doesn’t."},
          {not:"“Maybe I should just keep this one…”", yes:"Foster-failing is allowed — if it’s the right call, not guilt driving it."},
        ] },
      { type:"quote", kicker:"TRANSLATED",
        said:"“I wasn’t planning on keeping another dog…”",
        means:"Said by every foster ever. Sit with it before you decide. The right reason keeps you fostering. Guilt keeps you full — and closes the door on the next one." },
      { type:"closer", kicker:"THE FOSTER FILES",
        mantra:[["LETTING ONE GO","plain"],["IS HOW YOU","plain"],["SAVE THE NEXT.","red"]],
        cta:"Thinking about fostering? This is your sign. Follow for the playbook.",
        photo:{key:"hero", treat:"bw"} },
    ],
  },

  /* 11 ───────────────────────────────────────────────────────── */
  {
    id: "11-resource-guarding", no: "11", slug: "Resource Guarding",
    slides: [
      { type:"cover", topic:"FOOD & TOY GUARDING",
        title:[["DON’T","box"],["TEST","plain"],["THE","plain"],["BOWL.","red"]],
        sub:"Reaching in to “prove you can” is exactly how you build the growl.",
        photo:{key:"kiss", treat:"color", cap:"trust, not tests"} },
      { type:"truth", kicker:"RESOURCE GUARDING",
        lines:[["GUARDING IS","plain"],["FEAR —","red"],["NOT","plain"],["DOMINANCE.","ink"]],
        foot:"A dog guards because it’s scared of losing something good. Threaten the resource and you just proved the fear was right." },
      { type:"steps", kicker:"BUILD THE TRUST", title:"TRADE UP, DON’T TAKE",
        steps:[
          {n:"1",h:"KEEP YOUR HANDS OUT", t:"No reaching into the bowl, no taking it away to “test” it. Let them eat in peace."},
          {n:"2",h:"APPROACH = GOOD", t:"Toss something better as you walk past, so your approach predicts treats, not threats."},
          {n:"3",h:"SEPARATE THE TRIGGERS", t:"Feed in different rooms, pick up high-value toys, don’t force sharing while trust is young."},
          {n:"4",h:"NEVER PUNISH A GROWL", t:"The growl is the warning label. Punish it and you get the bite with no warning at all."},
        ] },
      { type:"mistake", kicker:"THE BIG ONE",
        wrong:{ mk:"DON’T", t:"Stick your hand in the bowl to “show them who’s boss.” That builds the exact guard you’re afraid of." },
        good:{ mk:"DO", t:"Make your approach mean good things — and for serious guarding, loop in your trainer. Manage it, don’t gamble." } },
      { type:"closer", kicker:"RESOURCE GUARDING",
        mantra:[["TRADE UP.","plain"],["DON’T","plain"],["TAKE.","red"]],
        cta:"Living with a guarder? SAVE this before the next meal.",
        photo:{key:"adopt", treat:"bw"} },
    ],
  },

  /* 12 ───────────────────────────────────────────────────────── */
  {
    id: "12-too-much-dog", no: "12", slug: "Energy Mismatch",
    slides: [
      { type:"cover", topic:"MORE DOG THAN YOU PLANNED",
        title:[["YOU","plain"],["DIDN’T","box"],["GET A","plain"],["BAD","out"],["DOG.","plain"],["JUST A","plain"],["BORED","red"],["ONE.","box"]],
        sub:"That “crazy” rescue is usually a working breed with no job to do.",
        photo:{key:"podium", treat:"color", cap:"give it a purpose"} },
      { type:"truth", kicker:"ENERGY MISMATCH",
        lines:[["A TIRED DOG","plain"],["IS A","plain"],["GOOD DOG.","red"]],
        foot:"Half of what looks like “bad behavior” is just unspent energy hunting for an exit. Drain it on purpose, before it picks its own." },
      { type:"steps", kicker:"WORK THE DOG", title:"GIVE IT A JOB",
        steps:[
          {n:"1",h:"STRUCTURE OVER MILES", t:"A structured walk beats a frantic run. Running alone just builds a fitter dog with the same problem."},
          {n:"2",h:"WORK THE NOSE", t:"Sniff walks, nose work, find-it games. The nose is the off-switch for the brain."},
          {n:"3",h:"MAKE THEM EARN IT", t:"Feed through puzzles and training reps instead of a free bowl. Effort tires them out."},
          {n:"4",h:"RESPECT THE BREED", t:"Bred to work? Hand it a daily purpose — or it’ll invent one you really won’t like."},
        ] },
      { type:"quote", kicker:"TRANSLATED",
        said:"“He’s bouncing off the walls — he must need more exercise.”",
        means:"Maybe. Or his brain needs a job. Ten minutes of real thinking — nose work, puzzles, training — can tire a dog out more than a mile of walking ever will." },
      { type:"closer", kicker:"ENERGY MISMATCH",
        mantra:[["DRAIN THE BRAIN,","plain"],["NOT JUST","plain"],["THE LEGS.","red"]],
        cta:"Got more dog than you bargained for? SAVE this.",
        photo:{key:"hero", treat:"bw"} },
    ],
  },

  /* 13 ───────────────────────────────────────────────────────── */
  {
    id: "13-pain-not-behavior", no: "13", slug: "Pain, Not Behavior",
    slides: [
      { type:"cover", topic:"WHEN IT’S A VET, NOT A TRAINER",
        title:[["SOME","plain"],["“BEHAVIOR”","box"],["IS REALLY","plain"],["A VET","out"],["VISIT.","red"]],
        sub:"A dog that suddenly snaps or won’t move might be hurting — not being difficult.",
        photo:{key:"nap", treat:"color", cap:"rule out the body"} },
      { type:"truth", kicker:"MEDICAL SURPRISES",
        lines:[["RULE OUT","plain"],["THE BODY","red"],["FIRST.","ink"]],
        foot:"Pain shows up as behavior. Before you train it away, make sure it isn’t an ear infection, a sore hip, or a rotten tooth doing the talking." },
      { type:"steps", kicker:"CHECK BEFORE YOU CORRECT", title:"THE BODY TALKS FIRST",
        steps:[
          {n:"1",h:"SUDDEN CHANGE = RED FLAG", t:"A dog that snaps, hides, or stops walking out of nowhere needs a vet, not a lecture."},
          {n:"2",h:"KNOW THE SUSPECTS", t:"Ears, skin, fleas & ticks, hot spots, limping — all need a real diagnosis, not a guess."},
          {n:"3",h:"STRESS WRECKS THE GUT", t:"Bland diet for stress diarrhea. Vet it past 48–72 hours, or the second you see blood."},
          {n:"4",h:"DON’T TRAIN A SYMPTOM", t:"When behavior shifts fast, rule out pain before you correct anything."},
        ] },
      { type:"mistake", kicker:"GET THIS RIGHT",
        wrong:{ mk:"DON’T", t:"Punish a dog for “suddenly getting aggressive” or “being lazy” on walks. You can’t correct a toothache." },
        good:{ mk:"DO", t:"Get a real exam first. A calm dog that turns reactive overnight is often a dog in pain asking for help." } },
      { type:"closer", kicker:"MEDICAL SURPRISES",
        mantra:[["BODY FIRST.","plain"],["TRAINING","plain"],["SECOND.","red"]],
        cta:"New dog acting “off”? SAVE this and vet it.",
        photo:{key:"couch", treat:"bw"} },
    ],
  },

  /* 14 ───────────────────────────────────────────────────────── */
  {
    id: "14-progress-not-linear", no: "14", slug: "Setbacks",
    slides: [
      { type:"cover", topic:"WHEN IT ALL BACKSLIDES",
        title:[["PERFECT","plain"],["FOR A","plain"],["WEEK,","box"],["THEN IT","plain"],["FELL","out"],["APART?","red"]],
        sub:"That’s not the dog breaking. That’s the dog finally arriving.",
        photo:{key:"hero", treat:"color", cap:"meet the real dog"} },
      { type:"truth", kicker:"TRAINING SETBACKS",
        lines:[["EXPECT","plain"],["THE","plain"],["DIPS.","red"]],
        foot:"Progress isn’t a straight line. The regressions aren’t failure — they’re part of the deal. Your steadiness through them is the actual training." },
      { type:"steps", kicker:"RIDE IT OUT", title:"HOLD THE LINE",
        steps:[
          {n:"1",h:"RESET, DON’T PANIC", t:"Lost house training a week in? Decompression wore off. Re-tighten the structure and restart."},
          {n:"2",h:"SAME RULES, EVERY HUMAN", t:"A dog can’t follow a pack that contradicts itself. Everyone runs the same playbook."},
          {n:"3",h:"SAME WORDS, SAME ANSWERS", t:"Pick the cues and the boundaries — then don’t move them halfway through the week."},
          {n:"4",h:"DON’T TAKE IT PERSONALLY", t:"A setback is information, not betrayal. Stay calm and consistent through the dip."},
        ] },
      { type:"saythis", kicker:"WHEN IT BACKSLIDES", title:"REFRAME THE DIP",
        rows:[
          {not:"“He’s being stubborn and spiteful.”", yes:"He’s stressed or confused. Lower the bar, raise the structure."},
          {not:"“We’ve tried everything already.”", yes:"You’ve tried everything once. Pick one plan and run it two full weeks."},
          {not:"“Mom lets him on the couch, I don’t.”", yes:"Mixed rules ARE the problem. Get every human on the same page."},
        ] },
      { type:"closer", kicker:"TRAINING SETBACKS",
        mantra:[["STAY CALM","plain"],["THROUGH","plain"],["THE DIPS.","red"]],
        cta:"In a setback week? SAVE this and breathe.",
        photo:{key:"lick", treat:"bw"} },
    ],
  },

  /* 15 ───────────────────────────────────────────────────────── */
  {
    id: "15-marking", no: "15", slug: "Marking",
    slides: [
      { type:"cover", topic:"MARKING IN THE HOUSE",
        title:[["MARKING","red"],["ISN’T","box"],["POTTY","plain"],["TRAINING.","out"]],
        sub:"It’s communication — and yelling just adds drama to the message.",
        photo:{key:"merch", treat:"color", cap:"claim it calmly"} },
      { type:"truth", kicker:"MARKING (ESPECIALLY MALES)",
        lines:[["CLAIM THE SPACE","plain"],["WITH CALM,","red"],["NOT","plain"],["VOLUME.","ink"]],
        foot:"Marking is about insecurity and territory, not a full bladder. Loud reactions raise the stakes. Calm ownership lowers them." },
      { type:"steps", kicker:"SHUT DOWN THE HABIT", title:"OWN THE ROOM",
        steps:[
          {n:"1",h:"INTERRUPT THE START", t:"Calmly stop the lift the moment it begins, then walk them straight outside."},
          {n:"2",h:"MANAGE THE OPENING", t:"Supervise — or a belly band short-term — so they physically can’t rehearse it."},
          {n:"3",h:"KILL THE SCENT", t:"Enzyme cleaner only. Leftover odor reads like a signature and invites a re-mark."},
          {n:"4",h:"HAVE THE NEUTER TALK", t:"With your rescue. Intact males mark more — reduce the drive at the source."},
        ] },
      { type:"mistake", kicker:"DON’T MAKE IT WORSE",
        wrong:{ mk:"DON’T", t:"Scream or rub their nose in it. That adds anxiety — and anxiety is exactly what fuels more marking." },
        good:{ mk:"DO", t:"Claim your space with calm body language, manage the environment, and clean it like a crime scene." } },
      { type:"closer", kicker:"MARKING",
        mantra:[["CALM CLAIMS","plain"],["THE","plain"],["HOUSE.","red"]],
        cta:"Got a marker? SAVE this before the next spot.",
        photo:{key:"girls", treat:"bw"} },
    ],
  },
];

// ── Photo direction: spread the 9 portraits across covers + closers for variety.
//    [coverKey, closerKey] per carousel id.
const PHOTO_PLAN = {
  "01-first-72-hours":   ["hero",   "couch"],
  "02-potty-accidents":  ["adopt",  "merch"],
  "03-crate-crying":     ["nap",    "kiss"],
  "04-separation-anxiety":["couch", "lick"],
  "05-leash-pulling":    ["merch",  "hero"],
  "06-fearful-dog":      ["lick",   "kiss"],
  "07-wont-eat":         ["hero",   "adopt"],
  "08-manners":          ["podium", "girls"],
  "09-meeting-pets":     ["girls",  "nap"],
  "10-the-goodbye":      ["kiss",   "podium"],
  "11-resource-guarding":["kiss",   "adopt"],
  "12-too-much-dog":     ["podium", "hero"],
  "13-pain-not-behavior":["nap",    "couch"],
  "14-progress-not-linear":["hero", "lick"],
  "15-marking":          ["merch",  "girls"],
};
const PHOTO_POS = { podium: "50% 12%", nap: "50% 35%", adopt: "50% 30%" };
for (const c of CAROUSELS) {
  const plan = PHOTO_PLAN[c.id];
  if (!plan) continue;
  const cover = c.slides.find(s => s.type === "cover");
  const closer = c.slides.find(s => s.type === "closer");
  if (cover)  { cover.photo.key  = plan[0]; if (PHOTO_POS[plan[0]]) cover.photo.pos  = PHOTO_POS[plan[0]]; }
  if (closer) { closer.photo.key = plan[1]; if (PHOTO_POS[plan[1]]) closer.photo.pos = PHOTO_POS[plan[1]]; }
}
