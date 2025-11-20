

//NAVBAR
const stickyNav = document.getElementById('navbar');
const mainHeader = document.getElementById('start');
let lastScrollY = window.scrollY;

const headerHeight = window.innerHeight;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    // Condition 1: Hide/Show logic
    if (currentScrollY > headerHeight) {
        // Only show/hide the sticky nav once we are past the main header
        if (currentScrollY > lastScrollY && currentScrollY > headerHeight + 64) {
            // Scrolling DOWN
            stickyNav.classList.add('nav-hidden');
        } else {
            // Scrolling UP
            stickyNav.classList.remove('nav-hidden');
        }
    } else {
        // If we scroll back up into the main header area, keep the sticky nav hidden
    }
    lastScrollY = currentScrollY;
});


//SLIDESHOW
const buttons = document.getElementsByClassName("slideshow_arrow");
buttons[0].addEventListener("click", () => {
	console.log("wow");

	const slides = document.querySelector(".carousel>ul");
	const activeSlide = slides.querySelector("[data-active]");
	let newIndex = [...slides.children].indexOf(activeSlide) - 1;
	newIndex %= slides.children.length;
	if (newIndex < 0) newIndex += slides.children.length;

	console.log(newIndex)

	slides.children[newIndex].dataset.active = true;
	delete activeSlide.dataset.active;
});
buttons[1].addEventListener("click", () => {
	console.log("wow");

	const slides = document.querySelector(".carousel>ul");
	const activeSlide = slides.querySelector("[data-active]");
	let newIndex = [...slides.children].indexOf(activeSlide) + 1;
	newIndex %= slides.children.length;

	slides.children[newIndex].dataset.active = true;
	delete activeSlide.dataset.active;
});


//MUSIC
const playlist = [
	"City Ruins (Rays of Light)",
	"Shadowlords Castle (Memory)",
	"Song of the Ancients (Devola)",
	"Ashes of Dreams (Aratanaru)",
	"Blissful Death",
	"Faltering Prayer (Dawn Breeze)",
	"Fortress of Lies",
	"City Ruins (Shade)",
	"Amusement Park",
	"Kaine Salvation",
	"Peaceful Sleep",
	"Vague Hope (Cold Rain)",
	"Faltering Prayer (Starry Sky)",
	"Voice of no Return ",
	"Repose"
];
let index = 0;
let timeStamp = 0;
let volume = 15;
let entered = false;
const musicToggle = document.getElementById("music_toggle");
let musicVolume = document.getElementById("music_volume");
const backgroundMusic = document.getElementById("background_music");

function playNext()
{
	console.log("ended")

	backgroundMusic.src = "./assets/background_music/" + playlist[index].toLowerCase().replace(/\s+/g, "_") + ".mp3";
	backgroundMusic.currentTime = timeStamp;
	backgroundMusic.volume = 0.2 * (volume / 100);
	backgroundMusic.play();
	index = (index + 1) % playlist.length;

	console.log(backgroundMusic.src);
	console.log("music playing", index - 1);
	console.log(index)
}

function playStop()
{
	timeStamp = backgroundMusic.currentTime;
	backgroundMusic.pause();
}

musicVolume.addEventListener("input", () => {
    volume = musicVolume.value;
   	backgroundMusic.volume = (volume / 100);
});

backgroundMusic.addEventListener("ended", playNext);
musicToggle.addEventListener("change", (event) => {
	if (musicToggle.checked) 
	{
		backgroundMusic.src = "./assets/background_music/" + playlist[index].toLowerCase().replace(/\s+/g, "_") + ".mp3";
		backgroundMusic.currentTime = timeStamp;
		backgroundMusic.volume = 0.2 * (volume / 100);
		backgroundMusic.play();

		if (!entered) index += 1;
		entered = true;
	}
	else playStop();
});


//COMMITTEES
const committeeButtons = document.querySelectorAll('.com_butt');
const profilesContainer = document.querySelectorAll('.profile_box');

committeeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Use data-target to find the correct member group ID
        const targetId = button.getAttribute('data-target');
        profilesContainer.forEach(group => group.classList.remove('hidden-members'));
        profilesContainer.forEach(group => group.classList.add('hidden-members'));
        
        // Show the corresponding member group
        const targetGroup = document.getElementById(targetId);
        if (targetGroup) {
            targetGroup.classList.remove('hidden-members');
        }
    });
});


//BIOGRAPHY
const outputs = {
    "acosta": {
        "name": "Mico Angelo Acosta",
        "biography": `Mico Angelo Q. Acosta is a sophomore studying BS Food Science & Technology at the University of the Philippines Los Baños.<br><br>Mico believes that art is the playful articulation of the human experience. Through art, individuals can understand themselves at a deeper level and is the best path to self-actualization.`
    },
    "aguirre": {
        "name": "Kat Aguirre",
        "biography": `Maria Katrina L. Aguirre, known as Kat, is a first-year BS Economics student at the University of the Philippines Los Baños. Originally from Mandaluyong City, Manila, she explores themes that dwell on the darker side of reality.<br><br>Kat believes that art should comfort the disturbed and disturb the comforted, using her work as a medium to question, provoke, and raise awareness. Through her pieces, she aims to challenge perceptions and shed light on truths often left unseen.`
    },
    "baconguis": {
        "name": "Ryz Francheska Baconguis",
        "biography": `Ryz Francheska A. Baconguis is a first-year BS Computer Science student at the University of the Philippines Los Baños.<br><br>She enjoys making digital art as a way to unwind and create a personal space separate from her academic work. She believes that art should be fun and expressive. She uses her digital canvas to explore her inner world and visualize emotions that are difficult to articulate in words.`
    },
    "bajade": {
        "name": "Jann Alexandrei Bajade",
        "biography": ""
    },
    "banaag": {
        "name": "Angelica Grace Banaag",
        "biography": `Angelica ‘Eli’ Grace G. Banaag is a  first-year BS Economics student at the University of the Philippines Los Baños. Originally from San Mateo, Rizal, she pursues her studies with independence and passion for continuous learning. She is unafraid to test the waters, particularly when engaged with subjects that spark her curiosity.<br><br>Exposed to various opportunities from a young age, she has developed versatility across diverse fields, including the arts.  Combining creativity and clever intent, she produces artwork to address real-world issues, particularly those concerning humanity. One of her signatures is to ignite a fire in the audience’s mind— to spark thought, emotion, and a renewed awareness. While her approach may seem roundabout, her ultimate goal is to inspire critical thinking, especially through the symbolism she employs. For Eli, art serves as a medium of expression that conveys depth, empathy, and reflection; where creativity and intellect collaborate to build a more considerate, equitable, and compassionate society.`
    },
    "bertiz": {
        "name": "Ashley Grace Bertiz",
        "biography": `Ashley Grace Bertiz is a first-year BS Economics student at the University of the Philippines - Los Baños. Born and raised in Dasmariñas, Cavite, Ashley was seen at a young age for her curiosity for creativity. Now that she is older, not only is Ashley venturing into the world of economics, but also exploring the richness of the art world. <br> <br> She has been observed as a jack of all trades when it comes to art. Having an ability in drawing, painting, graphic design, and fashion, she has a strong will on turning her creative visions into reality. That is why in the latest science-meets-art project, she used the maximum tools to create the vision she wants to see. For her, art is her lifeline and her vehicle for self-expression. Now, her aim for her artistry is to improve her creativity more, and to use her artistry to express ranging from personal experiences to collective, societal experiences.`
    },
    "bolado": {
        "name": "Kristel Charisse Bolado",
        "biography": `A first-year BS Economics student from the University of the Philippines Los Baños, Kristel Charisse C. Bolado approaches the world with the belief that art is not confined to galleries or canvases, but lives quietly in the spaces we often overlook. With a keen eye for detail, she finds inspiration in ordinary moments, observing how form, rhythm, and meaning emerge naturally in everyday life.<br><br>Her artistic perspective is shaped by the idea that beauty is not created so much as it is discovered—revealed to anyone willing to look closely and with intention. Guided by both analytical thought and intuitive curiosity, Bolado continues to explore how art can exist everywhere, waiting to be recognized by those who choose to seek it.`
    },
    "bonita": {
        "name": "Micah Bonita",
        "biography": `Micah Bonita is a first-year BS Economics student at the University of the Philippines - Los Baños. Being raised in Taguig City, Micah grew up surrounded by people from across the country and the world—each persevering to achieve their own vision of success. She carries their stories, bred with her own, in both her personal and academic pursuits. Deeply inquisitive and empathetic, she learns from those around her and hopes to spark the same curiosity in them.<br><br>Reflected by her artwork is her conviction for the notion that science and technology is a double-edged sword—capable of materializing humanity’s brightest hopes and deepest fears. Micah seeks to be among those who wield it wisely, aware of the power it holds and steering that power toward society’s common good.`
    },
    "buenaventura": {
        "name": "Pauleen Joyce Buenaventura",
        "biography": `Pauleen Joyce J. Buenaventura, also known as Pau, is a BS Computer Science freshman student at the University of the Philippines Los Baños. Born and raised in Santa Rosa, Nueva Ecija, she gives great importance to art as it reflects personal perspective and meaning. For her, art serves as a relief from the often demanding and exhausting world of science and technology– a space where she finds beauty and inspiration.  <br> <br> She finds joy in blending creativity with innovation, using technology as a medium to express her artistic vision. As she continues her college journey, she seeks to merge coding, design, and digital media to create projects that not only showcase her creativity but also convey meaningful messages and foster community engagement.`
    },
    "cabagui": {
        "name": "Marvin Daniel Cabagui",
        "biography": `Marvin Daniel L. Cabagui is a BS Computer Science student from UP Los Banos and is from Taguig. He enjoys reading, music, and art. He believes he would be an artist if survival did not come first, and that he is an artist at heart but a worker by necessity. <br> <br> Art has a simple meaning for him. It must strike something in someone. It is the moment something inside one person reaches something inside another. Art makes people pause and lets them feel something real. It does not need to be perfect or complex. Its value is in the impact it leaves.`
    },
    "cale": {
        "name": "Aaron Cohen Cale",
        "biography": `Aaron Cohen Cale, also known as AC, is a first-year Bachelor of Science in Computer Science student at the University of the Philippines Los Baños. Originally from Muntinlupa City, Metro Manila, he brings together his academic pursuit of technology with a strong passion for the arts. <br> <br> For AC, artistic expression and editing are more than technical practices—they are milestones that mark personal growth and lived experiences. He views every piece of art as a narrative of the self, capturing the creator’s state of mind at the moment of making. Through his works, he emphasizes the enduring value of emotion, authenticity, and human presence in art.`
    },
    "caliwag": {
        "name": "Kaella Maye Caliwag",
        "biography": `Kaella Maye T. Caliwag is a first-year student of the University of the Philippines Los Baños pursuing a Bachelor of Science in Computer Science degree. Originally from Malolos City, Bulacan where they’ve been exposed to multiple forms of art through exhibitions or the internet. <br> <br> As a student inclined to both the arts and STEM, they yearn to constantly grow their artistic, narrative, and game development skills to create stories to be experienced. Through stories, they put focus on the inner struggles of their characters in broken worlds, driven by the fascination of humanity’s ability to hope, empathize with others, and overcome.`
    },
    "capina": {
        "name": "Elaiza Jennifer Capina",
        "biography": `Every story has a beginning and Elaiza’s begins in a small room filled with books, colors, and music that kindles her imagination. It is an early world that nurtured her curiosity and gusto for the arts. Elaiza Jennifer P. Capiña, better known as Elai, is a first-year BS Economics student at the University of the Philippines – Los Baños. Growing up in Lopez, Quezon, she developed a creative outlook on the world and found meaning in even the most mundane things. She eventually moved to San Pablo City, Laguna where her interest with art intensified. <br> <br> All forms of art became an avenue for her to step beyond her comfort zone. It encourages her to express herself more freely. She takes pleasure in writing, creating and listening to music, and watching films, all of which not only broadens her understanding of society but also unveils the unseen stories, struggles, and truths that shape the world past her own. `
    },
    "capulong": {
        "name": "Dexter Allen Capulong",
        "biography": `Dexter Allen A. Capulong is a first-year BS Economics student at the University of the Philippines Los Baños (UPLB). Born and raised in Calamba City, Laguna, he was exposed to various art forms and grew up to have a profound appreciation for art. <br> <br> He sees art as a way for people to express themselves—their thoughts and emotions, as well as their advocacies and perspectives toward current issues. This is reflected in his own works, such as “Bionic Man,” where he urges human ingenuity to continuously shine despite the constant technological advancements and growing use of AI. Aside from this, he continues to make sculptures, poems, and stories that further explore his personality and experiences in life, as he goes on to make improvements upon himself as a person and learn new things every day from his peers or society as a whole.`
    },
    "deri": {
        "name": "Angel Alyssa Deri",
        "biography": `Angel Alyssa Deri is a BS Human Ecology student at University of the Philippines-Los Baños. As a young Filipino advocate volunteer, she actively engages and participates in community efforts that empower and uplift the people she serves. She draws inspiration from her everyday experiences and the stories of the communities around her, capturing compassion, resilience, and the quiet strength of ordinary lives. <br> <br> Her volunteer work is driven by a deep commitment to making a positive impact and promoting resilience in the community. She believes in collective action and her hope for the betterment of the lives of many people, especially within the community and the environment that has shaped her values and inspiration–will someday and eventually be achieved. `
    },
    "esternon": {
        "name": "Princess Megan Esternon",
        "biography": `A first-year BS Development Communication student at the University of the Philippines Los Baños, she was born in the province but spent her early years in the city, growing up quiet and reserved, someone who would rather read her books all day than yap with anyone, or ride a bus for hours just to get lost in her thoughts. Passionate about astronomy, she would love to one day see the aurora borealis. With a strong foundation in writing and public speaking, having won several awards in debate and essay writing, she can easily explore completely different paths, showing how well she adapts. As the eldest daughter, she developed a natural independence, learning early to handle things on her own. She discovered she could pick up almost anything if she gave herself the chance, whether creating, performing, speaking, solving, or stepping into something unfamiliar. <br> <br> Instead of chasing one passion, she follows whatever sparks her curiosity. Art in all its forms—music, instruments, dance, painting, and drawing—becomes a space where she can disappear into her thoughts. Even so, her siblings stay as her calmest center, the reason she keeps pushing ahead, quietly proving to herself that even on days marked by illness, she still finds a way to keep going.`
    },
    "fernandez": {
        "name": "Aaron Fernandez",
        "biography": `A BS Food Science and Technology student at a University in the Philippines Los Banos, Aaron Fernandez lives in Lingayen, Pangasinan. He is a student who balances the analytical world of science with a quiet, introspective nature, someone who can get lost for hours in his thoughts. With a strong foundation in his academics, he also shows a strong commitment to his community and university service, showing how well he adapts. <br> <br> This commitment is reflected in his active involvement as a member of the <span class="bold">UP PALARIS CONFRATERNITY</span>, where he connects with his Pangasinense roots. He also dedicated his time as a former volunteer of the <span class="bold">Gender Rights and Welfare Committee in the UP CAFS Freshman Council</span>. Instead of chasing just one path, Aaron follows whatever sparks his curiosity, whether it's in the sciences or in his organizational work. This drive to explore and contribute stays as his calmest center, the reason he keeps pushing ahead, quietly proving to himself that he can handle new challenges, a journey that belongs to Aaron Fernandez.`
    },
    "lofranco": {
        "name": "Lawrence Lofranco",
        "biography": `Lawrence D. Lofranco, or Lawr, is an 18-year-old student and stunner taking up Bachelor of Science in Economics at the University of the Philippines Los Baños. Born and raised in Payatas, Quezon City, he grew up in a loving, religious family, which often made him reflect on his beliefs and gender identity. <br> <br> From a young age, Lawr loved to express himself creatively—turning blankets and curtains into ball gowns, draping towels as long hair, and belting out female pop songs. These playful experiments sparked a love for fashion and costume-making, which he polished through high school competitions. Recognition from these early experiences eventually led him to drag, where he combines fashion, costume-making, and makeup skills to create bold and unique artistic expressions. <br> <br> Along the way, Lawr noticed that some of the most creative and artistic people he knows come from religious families—families that often initially condemned the kinds of art he loves. Still, he learned that religion doesn’t have to stand in the way of self-expression, creativity, or staying true to yourself. <br> <br> Inspired by a childhood dream of becoming a sirena, Lawr brings this fantasy to life in his artwork—exploring how it might exist through genetic engineering or mutation and imagining humans under the sea. Through his masterpiece, he shows that science, art, and self-expression can come together in ways that are both magical, dazzling, and breathtaking.`
    },
    "poserio": {
        "name": "Jewel Glyn Poserio",
        "biography": `Jewel Glyn Poserio is a second-year BS Nutrition student at the University of the Philippines Los Baños whose world has always revolved around creativity. Having started in the modeling industry as a child, she learned early on that art isn’t just something you see—it’s something you feel. Growing up surrounded by mentors from different artistic fields, from music and traditional arts to media arts, she discovered how each form tells its own story. Now, she’s deeply drawn to how fashion communicates meaning beyond appearance, believing that clothes are not just worn but spoken through. For Jewel, art is a spark—something that stirs emotion, connection, and reflection in everyone who encounters it.`
    },
    "santos": {
        "name": "Maria Sasha Anika Santos",
        "biography": `Maria Sasha Anika B. Santos is a first year scholar of BS Development Communication in University of the Philippines Los Baños. She is originally from Paombong, Bulacan where she refined herself and completed her primary and secondary education. <br> <br> Sasha’s background in the academe developed her deep appreciation in arts, beginning with her perspective in valuing nature's elegance. Her principle guided her in fascinating Claude Monet’s impressionist paintings where natural landscapes are embraced. She also created a connection with the art of debate where she argues critically and creatively by the virtue of thorough analysis and understanding of the imagined and lived human experiences. Continuing in moving to her path, Sasha will always believe that people should let themselves explore and dream beautifully.`
    },
    "sazon": {
        "name": "Aryanna Reign Sazon",
        "biography": `Aryanna Reign R. Sazon, also known as Ary, is a first year BS Development Communication student at the University of the Philippines Los Baños. Originally from Botolan, Zambales, they grew up leisurely practicing and surrounding themself in art. <br> <br> Most of Ary’s childhood consisted of drawing and writing poems or songs. Having a grandfather who was a music conductor, they also grew to love music and learned how to play various instruments. Ary views art as a way of living rather than a means of leisure or hobby. Their works are often self-expressive and self-indulgent, usually exploring personal experiences within themes of love, identity, and grief. Ary’s work ranges from lighthearted and warm displays of passion, to a graphic, gruesome work of expression– often as a means to express intense emotions under the lens of horror.`
    },
    "watil": {
        "name": "Zeke Gabriel Watil",
        "biography": `Zeke Gabriel C. Watil is a freshman student at the University of the Philippines Los Baños, pursuing a Bachelor of Science in Development Communication. With a vibrant passion for the arts, he finds inspiration in the creative world of musicals, movies, and TV shows. He finds joy in producing graphic design, with no restrictions, just freely creating what comes to mind. Despite taking a different route than he had intended, he perseveres and pushes through, driven by his faith to discover the unknown.`
    },
    "garcia": {
        "name": "Enrico Garcia",
        "biography": `Enrico Garcia is a BS Economics student at the University of the Philippines Los Baños, his world is grounded in data and analysis (UPLB). But he always believed the best way to understand complex systems is through the stories we tell. His work as a journalist and researcher is built on this belief, and it's a perspective he sharpened as an avid film enthusiast. For him, watching film is an active form of research—a way to study how narratives are built, how culture is reflected, and how complex ideas are communicated. This passion for story, combined with his skills in writing and research, informs all of his work.`
    },
    "bassiag": {
        "name": "Jade Margareth Bassiag",
        "biography": `Jade Margareth Bassiag is a first-year Economics student at the University of the Philippines, Los Baños. Growing up surrounded by nature, she developed a deep appreciation for its beauty and the importance of protecting it. This appreciation for beauty influences not only her outlook on life but also her artistic preferences. She is particularly drawn to works of art, such as music and films, that provide thoughtful critique and evoke deep emotions. Jade’s passion for art and nature also inspires her academic interests in Economics, where she hopes to explore solutions for environmental protection.`
    },
    "bayon": {
        "name": "Andrie Hans Jones Bayon",
        "biography": `Andrie Hans Jones D. Bayon is a campus journalist, currently a news staffer in Explained PH, the biggest youth-led media organization in the Philippines. Born and raised in Tanza, Cavite, he is currently a freshman student taking up a Bachelor of Science in Economics as an undergraduate degree at the University of the Philippines Los Baños. <br><br>Being a campus journalist, he has been exposed to issues that the country is currently facing. Despite lacking creative hands, he did not stop creating pieces, nor did he fall short in immortalizing his opinions. Through the art of literature, he was able to produce thought-provoking articles and create meaningful conversations through his writing. Now, he is taking campus journalism beyond competition, engaging in news coverage and social work, fulfilling his duty as a youth, and advocating for his peers. `
    },
    "bien": {
        "name": "Monica Therese Bien",
        "biography": `Monica Therese A. Bien is a first-year Bachelor of Science in Economics student at the University of the Philippines Los Baños. Originally from Davao City, she grew up in an environment shaped by diverse people and experiences, fostering an early interest in understanding perspectives and social contexts. A graduate of the Humanities and Social Sciences (HUMSS) strand, she developed strong foundations in writing, discourse, and qualitative analysis. These formative experiences continue to influence her academic identity as she examines social and economic issues through both interpretive and analytical lenses.<br><br>Utilizing these skills, she can express complex ideas with clarity and depth. These skills drive her to explore and share ideas about the interrelationship of science, technology, and art through literary work as a medium. Guided by accuracy and interest, she aims to produce work that illustrates connections between ideas, inspires curiosity, and bridges both academic and creative realms.`
    },
    "caranzo": {
        "name": "Neal Colin Caranzo",
        "biography": `Currently studying in the University of the Philippines – Los Baños as a Bachelor of Science in Economics freshman, Neal Colin C. Caranzo was a former editorial writer from his hometown’s high school—Dasmariñas Integrated High School. Reflecting from his life’s thick and thin, writing became to express his sentiments from the everyday struggles of the common Filipino people.<br><br>Writing is a way to understand the marginalized, the silenced, and misunderstood people. I believe any human person of any kind, man or woman, young or adult, rich or poor, literate or illiterate; I find them fascinating. If we can understand them, we can find silver in invaluable lessons. All of this turmoil happening in our community and in our country is very unnecessary if people learned to hear the voices and opinions of each other objectively.<br><br>"You never really understand a person until you consider things from his point of view... until you climb inside of his skin and walk around in it"<br>- How to Kill a Mockingbird by Harper Lee`
    },
    "manalaysay": {
        "name": "Jelaena Mouline Manalaysay",
        "biography": `Jelaena Mouline S. Manalaysay is a first-year BS Economics student at the University of the Philippines Los Baños and a former feature writer. Born and raised in Quezon City, she sought the quiet life of the province to pursue her studies. Her works often tell the stories of ordinary Filipinos, presenting the beauty in everyday life. Her recent work explores Philippine folk astronomy.`
    },
    "mendoza": {
        "name": "Aaron Gabriel Mendoza",
        "biography": `Si Aaron Gabriel A. Mendoza ay isang manunulat mula sa Antipolo City na naligaw sa kursong Batsilyer ng Agham sa Panggugubat ng Unibersidad ng Pilipinas Los Banos. Layon niya—sa bawat pagkakataon—na hasain ang kaniyang panulat, palawigin ang kaniyang kakayanang pampanitikan, at patalasin ang kaniyang boses sa panunula.`
    },
    "santiago": {
        "name": "Rehan Shania Santiago",
        "biography": `Si Rehan Shania D. Santiago, kinikilala ng karamihan bilang Resha, ay estudyanteng nasa unang taon ng pag-aaral ng Batsilyer sa Agham sa Development Communication sa Unibersidad ng Pilipinas Los Baños.<br><br>Mula pagkabata, marami na siyang kwento at ideya na ibinahagi at pinapahalagahan. Sa kasalukuyan, siya ay natutong maging tahimik at maingat sa pagpapahayag. Ngunit lumalabas ang kanyang boses kapag kinakailangan. Ang kanyang mga salita ay nagiging tahanan ng damdamin, liwanag, at mga kwento ng mundo. Sa bawat linya, pinipili niyang magsalita hindi upang mag-ingay, kundi dahil may saysay, may layunin, at may dalang liwanag ang kanyang mensahe. Hindi lamang siya marunong magpahayag, kundi marunong din siyang makinig at makiramdam. Naniniwala si Resha na ang nararamdaman ay isa sa mga dapat ibahagi at ilabas, at maaari rin itong ipahayag sa pamamagitan ng sining, siyensya, at teknolohiya. Ang mahalaga ay mailabas ang damdamin sa tamang paraan. `
    },
    "tiu": {
        "name": "Jaira Tiu",
        "biography": `Jaira G. Tiu is a first-year undergraduate student at the University of the Philippines Los Baños, pursuing a Bachelor of Science in Economics. She has a penchant for reading books as well as watching video essays and documentaries. She was an editorial writer in elementary, competing in the Division Schools Press Conference twice. Albeit brief, her experience kindled her passion for writing. She remains committed to improving her skills by occasionally writing pieces on various subject matters that pique her interest.<br><br>Jaira aspires to achieve the capability of writing in a manner that is evocative and inspirational. Through her writing, she aims to spark meaningful discussions among readers. But above all, she hopes for her work to contribute positive societal change.`
    },
    "villanueva": {
        "name": "Joseph Airon Villanueva",
        "biography": `Joseph Airon P. Villanueva is a first-year Development Communication student at the University of the Philippines Los Baños. Having a background in radio broadcasting, he has long nurtured a passion for media production and public service. Being placed behind the microphone shaped his persona as a communicator (now a Development Communicator!) who values truth, transparency, and comradeship, which then ended him to pursue DevCom.<br><br>Airon has a strong desire to become a voice for the people, by the people. He enjoys creating short stories, writing purposeful features, and working with his peers to help others. He hopes to be a servant to the marginalized and fosters meaningful change, whether it be a small or big. Airon has a long journey ahead, but he is intrigued to know and explore what life has to offer.`
    },
    "zuleta": {
        "name": "Joseph III Zuleta",
        "biography": `Joseph A. Zulueta III is a first-year BS Economics student at the University of the Philippines Los Baños. Born and raised in Cabanatuan City, Nueva Ecija, he has always been curious about the world around him, from the patterns in numbers to the rhythms of everyday life. Outside of his studies, he enjoys exploring ideas, observing human behavior, and reflecting on the small details that often go unnoticed. He has a quiet appreciation for art, music, and culture, and he is interested in how people experience and interpret the world in different ways.`
    },
}

const biographyContainer = document.getElementById("biography_container");
const biographyProfile = document.getElementById("biography_profile");
const biographyText = document.getElementById("output_biography")

function displayContent(name)
{
    console.log(name, outputs[name]);
    biographyContainer.classList.remove("hidden");
    biographyText.innerHTML = outputs[name].biography;
    biographyProfile.src = "./assets/profiles/" + name + ".jpg";
}

const closeButton = document.getElementById("x");
closeButton.addEventListener("click", (event) => {
    biographyContainer.classList.remove("hidden");
    biographyContainer.classList.add("hidden")
});