var temp_app = document.querySelector('#temp_app');
temp_app.groups = [		    	
	{title: "Notices", 
		categories: [
		{
			title: "News and announcements",
			content: {
				intro: "Stay abreast of all of KnowRe’s latest news and announcements right here!",
				pars: [
					{
						subtitle: "KnowRe at NCTM 2015 in Boston",
						detail: ["KnowRe will be attending the National Council of Teachers of Mathematics Annual Meeting & Exposition in Boston, Massachussetts from April 15th through 18th this spring. Those who are attending, please come visit us at the booth as we’ll be unveiling some surprises!"]
					}
				]
			}
		}, 
		{
			title:"Update notes",
			content: {
				intro: "We are always developing ways to improve your KnowRe experience. Below are some of our newest enhancements, features and bug fixes added to our latest update.",
				pars: [
					{
						subtitle: "Guides",
						detail: ["To better guide our users through the KnowRe program, we have revamped our Guides.", "Made CCSS Alignments and Topics & Skills documents available for download.", "Articles provide announcements and news regarding recent updates, as well as guidance on scoring, the gamification system, how to navigate through the program etc. "]
					},
					{
						subtitle: "Help icons",
						detail: ["Newly added tooltips throughout the program provide guidance through the Teacher Dashboard and student Progress Reports, aiding teachers and students to better understand KnowRe's scoring system."]
					},
					{
						subtitle: "Bug fixes",
						detail: ["Various bugs in the \"Notification\" system have been fixed."]
					},
					{
						subtitle: "Profile images",
						detail: ["To be in compliance with KnowRe's Terms & Conditions and Privacy Policy, KnowRe will no longer import or display in KnowRe any user profile images from Facebook or Google. All user profile images will display the default KnowRe profile image. Review KnowRe's Terms & Conditions and Privacy policy at "],
						url: "http://about.knowre.com/privacy-and-terms"
					}
				]
			}
		}, 
		{
			title:"Our newest features",
			content: {
				intro: "Learn about some of our newest features.",
				pars: [
					{
						subtitle: "Lessons",
						detail: ["The Lesson Index has been redesigned into a visually captivating, contemporary vertical format that organizes lesson videos with practice questions in a more engaging manner.", "The Walk-me-through feature is even more engaging, presenting its guidance as chat messages between Dr. Doug and the student, a communication paradigm students are familiar with."]
					},
					{
						subtitle: "Review",
						detail: ["To help students better focus on their specific learning needs, KnowRe gives students greater access to the valuable Review curriculum. Students now have visibility to the results of their Review assignments."]
					},
					{
						subtitle: "Teacher Dashboard > Class > Overview",
						detail: ["The page previously known as \“Progress\” in the Teacher Dashboard has been renamed \“Overview.\”"]
					},
					{
						subtitle: "Teacher Dashboard > Class > Close-Up",
						detail: ["The Close-up tab displays student achievement scores on each problem, down to the Knowledge Unit level. Student results indicate the number of stars earned per lesson, coins earned per problem as well as the student’s performance (correct/incorrect) on each knowledge unit embedded within the problem."]
					},
					{
						subtitle: "Teacher Dashboard > Class > Assignments",
						detail: ["The Assignments tab enables you to assign lessons through KnowRe, and allows you to track the student’s performance by assignment.", "Assignment scores are displayed in real-time up until the due date/time, at which point the scores are finalized.", "If a student continues to work on the assignment after the due date and time, the scores will continue to update on the Overview and Close-up tabs as well as on the Student page of the Teacher Dashboard.", "Assignment scores now include progress data in % Completed, along with achievement scores."]
					},
					{
						subtitle: "Students page",
						detail: ["This section will indicate % Completed data along with achievement data to provide more detailed insight into individual student performance.", "The initial view upon opening the Students page provides each student’s real-time achievement in the enrolled curriculum in one column and the average Achievement of all assignments in the other."]
					}
				]
			}
		}
	]},
	{title: "Overview",
		categories: [
		{
			title: "Learning structure",
			content: {
				intro: "KnowRe’s CCSS-aligned curricula provide an enhanced, interactive learning experience featuring topic-based lessons, step-by-step instruction, real-life applications, videos, cartoons and much more.",
				pars: [
					{
						subtitle: "Classroom curriculum designed to provide personalized support",
						detail: ["KnowRe's complete curricula can be assigned in any order for the whole class, as well as for differentiated and personalized instruction and practice for each student.", "Lessons include introductory comics, direct instructional videos and practice opportunities. ","Students solve questions, get step-by-step support at their own pace, and earn gamified rewards (stars and coins) as they progress. ","Teachers can assign select lessons as well as initiate individually targeted and adaptive reviews which address a student’s weaknesses across the curriculum and help fill learning gaps. "]
					},
					{
						subtitle: "Teacher Dashboard",
						detail: ["Teachers monitor student achievement and progress in real-time through the Teacher Dashboard. ", "The data and progress view provided by the Dashboard enable teachers to more quickly and effectively respond to their students’ learning needs."]
					}
				]			
			}
		},
		{
			title: "Feature highlights",
			content: {
				intro: "Learn about some of KnowRe’s key features to make the best out of your KnowRe experience!",
				pars: [
					{
						subtitle: "Walk Me Through",
						detail: ["Many of KnowRe’s practice and application problems come with the Walk Me Through feature which provides personalized, step-by-step support to students while solving multi-step problems.", "The Walk Me Through was modeled after the way a teacher works 1:1 with an individual student and offers scaffolded, interactive questions along with hints and videos.", "While students are working through the Walk Me Through, KnowRe identifies exactly where a student is having trouble, then KnowRe makes this data available for the teacher in the Teacher Dashboard."]
					},
					{
						subtitle: "Navigation",
						detail: ["KnowRe is an open world which you can easily navigate using the drop down menu at the top center of the screen.", "Once you have entered a lesson, you can return to the map either by way of the Lesson Index or by using the drop-down navigation at the top center.", "Within a question, return to the Lesson Index by selecting the dot matrix in the upper left corner.", "To return to the Base Camp Lobby, simply click on the KnowRe logo."]
					},
					{
						subtitle: "Coins and stars",
						detail: ["Students can earn up to three coins for each question they answer. ", "A student earns 3 coins by answering the question correctly without support.", "Students earn 2 or less coins by accessing the Walk Me Through, and by entering incorrect answers. ", "All KnowRe questions can be re-attempted, continuously providing students with a fresh opportunity to earn all three coins. ", "Stars are earned on the basis of coins and appear on the curriculum map. Students can earn up to 3 stars for each lesson."]
					},
					{
						subtitle: "Base Camp",
						detail: ["Teacher and student users enter KnowRe through the Base Camp each time they log into the program.", "From Base Camp, users can choose their curriculum (by clicking on it), monitor their progress via the curriculum-based Progress Reports, and view outstanding assignments as indicated by purple pencil icons."]
					},
					{
						subtitle: "Teacher Dashboard",
						detail: ["The Teacher Dashboard is the hub for each Teacher’s KnowRe experience.", "In the Teacher Dashboard, you can Cceate classes, invite students to join a class, monitor student achievement, lesson completion, average class achievement.", "Teachers can also initiate Lesson and Review assignments.", "Check out the Student Performance articles(Student Performance 컨텐츠 링크) in this Guide to learn more."]
					},
					{
						subtitle: "Notifications",
						detail: ["KnowRe alerts users with various notifications which lights the bell icon in the upper right corner to turn red. ", "Notifications provide reminders about assignment due dates or when a student has requested to join your class. ", "To directly access the area the notification is pointing to, simply click \“Go.\” "]
					}
				]
			}
		}

	]},
	{title: "Getting Started", 
		categories: [
		{
			title: "Welcome video",
			content: {
				intro: "Welcome to KnowRe! Learn about the basics for navigating your way around KnowRe.",
				pars: [
					
				]
			}
		}, 
		{
			title: "How to create a class",
			content: {
				intro: "As a teacher you are able to create as many classes as you need. Each class will display the achievement of a particular group of students in the selected curriculum. ",
				pars: [
					{
						subtitle: "Creating a class in the Teacher Dashboard",
						detail: ["In the Teacher Dashboard, click \"+ Create a Class\" on the left side of the screen.", "Enter the required information to set the class name and choose the curriculum you will be using for the class.", "If you are ready to do so, you can follow the prompts to immediately invite students to join the class. ", "Note: If you need to see the achievement for the same group of students across multiple curricula, you will need to create additional classes with the same students in your Teacher Dashboard. "]
					}
				]
			}

		},
		{
			title: "Setting up student accounts",
			content: {
				intro: "We’ve made signing up your students to KnowRe simple and easy. Just follow the steps below and get your students started on their learning adventure.",
				pars: [
					{
						subtitle: "Student signup",
						detail: ["To sign students up to KnowRe, simply have your students go to knowre.com and create an account. This process is nearly identical to the teacher sign up except that instead of a school code, students need a class code to sign up. ", "Provide students with your class code by writing it on the board (case sensitive) OR by sending them an email when prompted during the class sign up process in your Teacher Dashboard. ", "Once students have the code, have your students go to knowre.com and follow the quick and simple signup process.","Upon sign up, students will be able to set up their Username and Password, which they will use for logging into their account. "]
					},
					{
						subtitle: "What you need to do",
						detail: ["Be sure to accept students from the Students tab of your Teacher Dashboard so you can see their progress data in your Dashboard."]
					}
				]
			}
		},
		{
			title: "Adding students to a class",
			content: {
				intro: "Have students who already have KnowRe accounts, but would like to add them to a different class in your Teacher Dashboard? Read on.",
				pars: [
					{
						subtitle: "Join a class",
						detail: ["Provide your students with the new class code and have them enter the code in the “join a class” pop-up which can be accessed by clicking on their name in the upper right corner of the screen.","Or, invite students through the Students tab by clicking \“Invite Students\” and entering their KnowRe username or email address."]
					}
				]
			}
		},
		{
			title: "Assigning work",
			content: {
				intro: "Use the “Assignments” feature in your Teacher Dashboard to assign lessons and the personalized review to your students as well as access grades fixed to the due date.",
				pars: [
					{
						subtitle: "How and what to assign",
						detail: ["Go to your Teacher Dashboard using the center top naviation menu.", "Select the class in which you wish to assign the work.", "Select the “Assignments” tab, then click “+ New Assignment”", "Follow the prompts", "Learn more in the “Assignments” articles in this Guide."]
					}
				]
			}
		}
	]},	
	{title: "Assignments", 
		categories: [
		{
			title: "How to assign lessons",
			content: {
				intro: "Assigning lessons in KnowRe is simple and easy!",
				pars: [
					{
						subtitle: "Assigning a lesson from the Teacher Dashboard",
						detail: ["Once in the Assignments tab, select “+ New Assignment.”", "Select “Lesson” on the right hand side.", "Expand “Select Lesson” drop down to choose lessons (you can assign more than one at a time).", "Choose a due date and time.", "Select the students who are to receive this assignment.", "Click Assign.", "Note: While students will be able to continue to retry the Lesson content even after the due date, the grades will freeze within the assignment tab as of the due date and time."]
					},
					{
						subtitle: "To edit or delete an assignment:",
						detail: ["Choose the assignment from the list.", "Click on the gear icon next to the Assignment’s name.", "Follow prompts to either edit or delete the assignment."]
					}
				]
			}
		}, 
		{
			title: "Assigning the adaptive review",
			content: {
				intro: "KnowRe’s unique Review assignment provides each student with a personalized curriculum of 12-questions. These questions are targeted to their particular areas for growth and are determined by the program based on data collected as they have been practicing.",
				pars: [
					{
						subtitle: "Assigning the KnowRe-generated adaptive Review",
						detail: ["Once in the Assignments tab of your Teacher Dashboard, select “+ New Assignment”", "Select “Review” on the right hand side", "Choose a due date and time", "Select the students who are to receive this Review", "Click Assign", "Note: Students can exit and re-enter the Review to continue working, but they will not have access to the Review after the specified due date and time."]
					}
				]
			}
		}, 
		{
			title: "How to monitor student assignments",
			content: {
				intro: "All KnowRe assignments can be monitored for completion and achievement. Data will update in real time until the assigned due date and time, at which point the data will freeze to provide a snapshot of the student's performance.",
				pars: [
					{
						subtitle: "Assignments List",
						detail: ["On the left half of the Assignments page is a list of all the assignments you have assigned to the students in that class.", "To monitor the progress of a specific Lesson or Review Assignment, select it from the list."]
					},
					{
						subtitle: "Summary tab",
						detail: ["Displays assignment details (number of problems, due date)", "Includes information about student action on the assignment"]
					},
					{
						subtitle: "In Detail tab",
						detail: ["Displays student achievement (green) and completion (blue) in graph and percentage formats", "Sortable by clicking on “Achvmt.” or “Complt.”", "Note: Lesson assignment data along with student achievement scores continue to update in real time in the Overview and Close-Up tabs."]
					}
				]
			}
		}
	]},
	{title: "Solving Questions", 
		categories: [
		{
			title:"Walk me through",
			content: {
				intro: "KnowRe’s Walk Me Through supports students just as a teacher would if they were working one-on-one with them. Students can select the Walk Me Through, or will be taken to it directly if they answer a question incorrectly.",
				pars: [
					{
						subtitle: "How it works",
						detail: ["As students are asked to submit an answer to a math problem, they are given the option to use the “walk me through” in the event they need support. ", "Students are always given 2 opportunities to submit the correct answer. If they do not answer the problem correctly the first time, they are given a second chance and the “walk me through” button lights up to prompt the student to ask for help.", "When working through the Walk Me Through, a student will be required to enter answers as they are prompted with guiding questions.", "Many steps are supported with embedded videos which students can access with a simple click on the video icon. Videos are provided to support students on the specific step they are working on.", "Keep in mind that students will earn less coins by accessing the walk me through for support. However, at the end of each problem, they are given the opportunity to “Try again” and re-attempt the problem without support and earn 3 coins."]
					}
				]
			}
		}, 
		{
			title:"Math inputs",
			content: {
				intro: "Answering an open-ended question in KnowRe is made easy with a simple math palette that helps to provide math inputs that are not available on a regular computer keyboard. ",
				pars: [
					{
						subtitle: "How to use the math palette",
						detail: ["Our simple math palettes appear as soon as you place your mouse in the answer input box. ", "Simply select the necessary symbols needed to express your answer appropriately.", "Note: If there is a symbol that is not found on the math palette, then it is on your keyboard."]
					}
				]
			}
		}, 
		{
			title:"Graphing",
			content: {
				intro: "We can’t forget about graphing when it comes to math! KnowRe’s graphing tools are intuitive and easy to use.",
				pars: [
					{
						subtitle: "How to graph",
						detail: ["Each graphing problem provides a slightly different version of the tool to help you express your response appropriately.", "If there is a graphing palette on the right side of the page, first select the appropriate graph you would like to use.", "If there is no graphing palette on the page, simply manipulate the graph by clicking and dragging the points.", "In certain problems, you will also be able to change points and lines to open or make them dotted using the palette made available below the graph.", "To express limits, drag the bar underneath the graph.", "To clear the graph and start again, simply click x."]
					}
				]
			}
		}, 
		{
			title:"Number lines",
			content: {
				intro: "Expressing your answer on a number line is extremely easy too. Here’s how.",
				pars: [
					{
						subtitle: "How to manipulate the number line",
						detail: ["Simply click and drag the point(s) to reposition in the appropriate spot.", "Select “Change Open/Close” to modify the point.", "Change directions by selecting “Change Direction.”"]
					}
				]
			}
		}
	]},
	{title: "Monitoring Student Performance", 
		categories: [
		{
			title: "At a glance",
			content: {
				intro: "Specific and actionable data is at the core of KnowRe. Data can be accessed through your Teacher Dashboard. ",
				pars: [
					{
						subtitle: "Class > Overview",
						detail: ["Click on the class you’d like to view, and in the Overview tab, you will find a color coded overview that reflects student and class achievement at each lesson level. "]
					},
					{
						subtitle: "Class > Close-Up",
						detail: ["Click on the Close-Up tab of the class, and you will find data that reflects your class and student achievements at the skill and sub-skill level. "]
					},
					{
						subtitle: "Students",
						detail: ["In the Students page of your class, you can view individual data, one student at a time."]
					}
				]
			}
		}, 
		{
			title: "Achievement system",
			content: {
				intro: "KnowRe’s Achievement system is designed to offer teachers a real-time gauge for a student’s understanding of concepts and skills. The achievement scores reflect the student’s performance on the given problem, lesson, or chapter, as of their most recent attempt except for when it is for an “assignment” assigned through KnowRe. (Read more about the way assignment scores are calculated in the Assignments article in this Guide.)",
				pars: [
					{
						subtitle: "How achievement scores are calculated",
						detail: ["Student achievement scores in KnowRe reflect an average that is calculated using the student's acquisition of coins on each question (3 Coins = 100% ; 2 Coins = 66% ; 1 Coin = 33% ; 0 Coins = 0%).", "Students can only earn a maximum of 3 coins when they are able to answer the question without support on their first or second try. Each student is given 2 attempts per problem.", "Students subsequently earn less coins when they access the Walk Me Through for support and enter incorrect answers.", "All problems within KnowRe can be retried. When a student re-attempts a question, they will tackle the same skill but with new numbers. Each time a student attempts a question, they have the opportunity to earn up to 3 coins. ", "Achievement Scores reflect their performance on their most recent attempt."]
					},
					{
						subtitle: "How the stars relate to student achievement",
						detail: ["Stars reflect a student’s achievement within a given lesson and are calculated on the basis of coins earned. ", "3 Stars= 90%+ of possible coins earned ; 2 Stars= 60%-89% of possible coins earned ; 1 Star= 30%-59% of possible coins earned ; 0 Stars= 0%-29% of possible coins earned "]
					}
				]
			}
		}, 
		{
			title: "Class > Overview tab",
			content: {
				intro: "The Teacher Dashboard’s Overview tab can be accessed by clicking on the class you’d like to view in your Teacher Dashboard. The Overview tab displays student and class achievement averages at the lesson level. Refresh the screen to see continuously updated real-time data as students work through the program.",
				pars: [
					{
						subtitle: "Color Coded System",
						detail: ["Blank= Student has not started the lesson", "Gray= Student has begun the lesson", "Green or Orange= Student has completed the lesson", "Note: Color coding to show grading ranges can be modified in the Settings menu of the Dashboard."]
					},
					{
						subtitle: "Sorting and viewing data",
						detail: ["Sort data into increasing or decreasing order by clicking on the lesson number.", "Switch chapters by clicking on the chapter number from the horizontal chapter list located right underneath the Overview tab, or by dragging the scroll bar at the bottom of the screen.", "Hover the cursor over a lesson score to reveal the corresponding lesson topic. "]
					}
				]
			}
		},
		{
			title: "Class > Close-up tab",
			content: {
				intro: "The Close-Up tab in the Teacher Dashboard shows student and class achievements at the skill and sub-skill levels while specifically identifying the skills and/or sub-skills that require the teacher’s attention. ",
				pars: [
					{
						subtitle: "How to navigate the Close-Up tab ",
						detail: [" - Select the chapter you wish to view.", "Select the lesson. ", "Click on the “+” to expand the lesson and view the covered skills. ", " - Click on the “+” next to each skill to expand the view to include the related sub-skills."]
					},
					{
						subtitle: "How to interpret the data ",
						detail: ["Class averages are provided at each lesson, problem, and knowledge unit level to help teachers interpret the current achievement status of the class overall. A lower class average will indicate one of two things, i.e. either the students have not yet attempted, or that they are struggling with, the given lesson, problem, or knowledge unit.", "At the lesson level, you will see each student achievement in Stars. This data gives you a sense of how well the class and students are doing overall. As mentioned in the earlier part of this Guide under Achievement System, stars indicate the student’s percentage achievement within that lesson.", "At the problem level, you will see each student achievement in Coins. This data indicates whether the student got the problem correct without any support (3 coins), with some (2 coins) or a lot of support (1 coin), or got it wrong (0 coins) even with all the help, or without getting help at all.", "If a student is showing a low number of coins earned in the problem, you can click on the subskills, also known as “knowledge units,” to determine the concept which the student is having trouble with. Note that knowledge units are prerequisite concepts that are needed for students to solve the given problem, and not necessarily the main skill covered in that lesson.", "A “ - “ indicates that the student has not yet attempted the lesson, problem, or knowledge unit and therefore there is no data point available.", "Refresh the screen to see real-time data as students work."]
					}
				]
			}
		},
		{
			title: "Class admin",
			content: {
				intro: "KnowRe’s Teacher Dashboard comes with a number of admin features that makes managing your class in KnowRe that much easier. Check out some of our easy-to-use features.",
				pars: [
					{
						subtitle: "Changing the class name in your Teacher Dashboard",
						detail: ["In the Teacher Dashboard, select the class you need to modify by clicking on its name.", "Click on the pencil icon next to the current class name.", "Enter the new class name and click reset."]
					},
					{
						subtitle: "Deleting a class from your Teacher Dashboard",
						detail: ["In the Teacher Dashboard, first select the class you need to delete by clicking on its name.", "Next, select the “Settings” tab.", "On the bottom left, you will see the option to “Delete this class.”", "Select this option and follow the prompts.", "Note: Removing a class from your Teacher Dashboard is easy, but do be careful before you do so! Every student will need to be enrolled in a Teacher’s class in KnowRe in order to access their account, so be sure to re-enroll your students to a new class before you delete the old one. (Learn about how to re-enroll your students in the “Adding students to a class” article in this Guide.)"]
					},
					{
						subtitle: "Locating the class code",
						detail: ["Select a class in the Teacher Dashboard and locate the class code in the upper right corner.", "Use this code to invite students to your class in KnowRe."]
					},
					{
						subtitle: "Removing students from a class -OR- resetting student passwords",
						detail: ["Enter the Students tab in your Teacher Dashboard", "Click on the student’s name", "Select the gear icon next to their name in their report page", "Follow the prompts", "Note: Students must be enrolled in a KnowRe class in order to log into the program."]
					}
				]
			}
		}
	]},	
	{title: "Implementation", categories: [{title: "Implementaiton Ideas"}, {title: "Case Studies"}]},
	{title: "Resources", categories: [{title: "Topics and skills - Pre-Algebra"}, {title: "Topics and skills - Algebra 1"}, "Topics and skills - Algebra 2", "Curriculum guides & standards alignment"]},	
	{title: "Monitoring student performance", 
		categories: [		
		{
			title: "Achievement system",
			content: {
				intro: "KnowRe’s Achievement system is designed to offer teachers a real-time gauge for a student’s understanding of concepts and skills. The achievement scores reflect the student’s performance on the given problem, lesson, or chapter, as of their most recent attempt except for when it is for an “assignment” assigned through KnowRe. (Read more about the way assignment scores are calculated in the Assignments article in this Guide.)",
				pars: [
					{
						subtitle: "How achievement scores are calculated",
						detail: ["Student achievement scores in KnowRe reflect an average that is calculated using the student's acquisition of coins on each question (3 Coins = 100% ; 2 Coins = 66% ; 1 Coin = 33% ; 0 Coins = 0%).", "Students can only earn a maximum of 3 coins when they are able to answer the question without support on their first or second try. Each student is given 2 attempts per problem.", "Students subsequently earn less coins when they access the Walk Me Through for support and enter incorrect answers.", "All problems within KnowRe can be retried. When a student re-attempts a question, they will tackle the same skill but with new numbers. Each time a student attempts a question, they have the opportunity to earn up to 3 coins. ", "Achievement Scores reflect their performance on their most recent attempt."]
					},
					{
						subtitle: "How the stars relate to student achievement",
						detail: ["Stars reflect a student’s achievement within a given lesson and are calculated on the basis of coins earned. ", "3 Stars= 90%+ of possible coins earned ; 2 Stars= 60%-89% of possible coins earned ; 1 Star= 30%-59% of possible coins earned ; 0 Stars= 0%-29% of possible coins earned "]
					}
				]
			}
		}, 
		{
			title: "Progress report",
			content: {
				intro: "Use the Progress Report feature to monitor your achievement and completion of Lessons and Chapters. In your Progress Report you can also monitor and begin your assignments. Progress Reports can be accessed from the Base Camp Lobby.",
				pars: [
					{
						subtitle: "Progress Report > Lessons tab",
						detail: ["See your achievement and completion percentages for each lesson (also shown in graph form under the lesson name)", "View your achievement and completion percentages for each chapter depicted in a bar graph", "Check out the number of stars earned in each lesson", "Click on the Chapter numbers on the x-axis of the graph to move between chapters.", "You can also enter lessons directly from the Progress Report by pressing Go."]
					},
					{
						subtitle: "Progress Report > Assignments tab",
						detail: ["Check out which assignments you have waiting and when they are due", "See your achievement and completion percentages on each assignments ", "Be sure to use the Assignments tab to be sure you don’t miss an assignment deadline. "]
					}
				]
			}
		}
	]}	
];	