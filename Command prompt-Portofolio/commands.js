const commands = {
  MYhelp : "Available commands: about, skills, education, projects, interests, contact, theme, clear, joke, ascii",
  MYabout : "Hi, I'm Kerry A passionate developer specializing in creative problem-solving.",
  MYSkills : "Languages: HTML, CSS, JavaScript, Python\nTools: Node.js, Java, C++, SEO",
  MYeducation : "B.Sc. in Computer Science from Kibabii University.\n<a href='https://drive.google.com/uc?export=download&id=1xvtYFk3bLz4MVK-xTtqFYEplt3vyNyTb' target='_blank'>Download CV</a>",
  MYprojects : `Type the number of a project for more details:\n1. Portfolio Website ..\n2. Financial Tracker`,
  MYinterests : "I love coding, solving puzzles, and exploring new tech like AI,Data analysis,Machine learning and blockchain.",
  MYcontact : "Email : kerrymukoya2005@gmail.com \nGitHub: <a href= 'https://github.com/Ivankerry'  target='_blank'>Github</a>",
  Ajoke : " Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  ascii : `
______
/      \\
|  😃  |
\\______/
  `,
  clear: () => { document.getElementById('output').innerHTML = ''; return ''; },
};

// Additional Commands
commands["projects 1"] = "Portfolio Website: A terminal-style site showcasing my skills in coding. [View Project](#)";
commands["projects 2"] = "Financial Tracker web : A robust effective C# app for tracking expenses. <a href= 'https://github.com/Ivankerry/FinancialTracker'  target='_blank'>VIEW PROJECT</a>";
commands.theme = "Available themes: dark, neon, crt. Use `theme [name]` to switch.";
commands["theme dark"] = () => switchTheme('');
commands["theme neon"] = () => switchTheme('neon');
commands["theme crt"] = () => switchTheme('crt');
