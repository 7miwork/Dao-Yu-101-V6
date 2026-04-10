export interface Lesson {
  id: number;
  number: number;
  title: string;
  phase: string;
  duration: number; // in minutes
  objective: string;
  whatStudentsLearn: string[];
  explanation: string;
  studentActivity: string;
  teacherTip: string;
}

export interface Island {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export const ISLAND_1_LESSONS: Lesson[] = [
  {
    id: 1,
    number: 1,
    title: "Welcome to Minecraft Education – Controls and Codebuilder",
    phase: "Introduction",
    duration: 60,
    objective: "Students will understand the Minecraft Education interface and learn basic controls for navigating the game world and accessing the Codebuilder.",
    whatStudentsLearn: [
      "How to navigate Minecraft Education Edition",
      "Basic keyboard and mouse controls",
      "How to access and open the Codebuilder interface",
      "Introduction to the Agent concept",
      "Basic UI navigation"
    ],
    explanation: "Minecraft Education Edition is a specialized version of Minecraft designed for learning. The Codebuilder is a visual programming interface that allows students to control an Agent (a helper character) using block-based code. This lesson introduces the environment and basic navigation.",
    studentActivity: "Students will log into Minecraft Education, explore the game world, locate the Codebuilder button, and open the programming interface. They will familiarize themselves with the layout and identify key UI elements.",
    teacherTip: "Ensure all students can successfully log in and access Codebuilder before moving forward. Have a backup plan for technical issues. Consider doing a full-class walkthrough on a projector first."
  },
  {
    id: 2,
    number: 2,
    title: "Basic Commands for the Agent",
    phase: "Fundamentals",
    duration: 60,
    objective: "Students will learn how to write simple commands to control the Agent's movement and basic actions.",
    whatStudentsLearn: [
      "Agent movement commands (forward, back, left, right)",
      "How to use the repeat block for basic loops",
      "Understanding coordinates and direction",
      "Basic debugging and error checking",
      "Running and testing code"
    ],
    explanation: "The Agent is a virtual character that can be controlled through code. Students learn the fundamental commands: move forward, move back, turn left, turn right. These commands form the foundation for all subsequent lessons. The repeat block allows these commands to be executed multiple times.",
    studentActivity: "Students will write code to move the Agent in different directions. They will create simple sequences like: move forward 5 times, turn right, move forward 3 times. They will run their code and observe the Agent's movement in the game world.",
    teacherTip: "Use visual markers in the game world to help students understand the Agent's position and direction. Encourage experimentation. Have students predict what their code will do before running it."
  },
  {
    id: 3,
    number: 3,
    title: "Build a Simple Path or Road with the Agent",
    phase: "Building Basics",
    duration: 60,
    objective: "Students will use the Agent to place blocks and create simple structures like paths and roads.",
    whatStudentsLearn: [
      "Agent block-placing commands",
      "Understanding coordinates in 3D space",
      "Creating straight lines and paths",
      "Using repeat loops to place multiple blocks",
      "Planning before coding"
    ],
    explanation: "Beyond movement, the Agent can place and destroy blocks. This lesson teaches students how to use the 'place block' command to create structures. Students learn to think about coordinates and plan their builds before coding.",
    studentActivity: "Students will write code to create a straight path of blocks. They will use repeat loops to place blocks in a line. Extensions: create paths in different directions, use different block types.",
    teacherTip: "Have students sketch their path on paper first. This helps them understand the logic before coding. Celebrate creative path designs. Discuss why planning is important in programming."
  },
  {
    id: 4,
    number: 4,
    title: "Repeat Loops – Making the Agent Build a Wall",
    phase: "Loops & Repetition",
    duration: 60,
    objective: "Students will master repeat loops to create more complex structures like walls.",
    whatStudentsLearn: [
      "Understanding loop syntax and nesting",
      "Using repeat loops efficiently",
      "Creating 2D structures (walls)",
      "Combining movement and block placement",
      "Loop optimization"
    ],
    explanation: "Repeat loops are fundamental to programming. Instead of writing the same command 10 times, students write it once inside a repeat block. This lesson focuses on using repeat loops to build walls by combining movement and block placement.",
    studentActivity: "Students will write code to build a wall of a specific height and length. Example: repeat 5 times (place block, move forward). They will experiment with different heights and widths.",
    teacherTip: "Introduce the concept of 'DRY' (Don't Repeat Yourself). Show students how repeat loops reduce code length and make code easier to maintain. Have them count how many lines of code they saved."
  },
  {
    id: 5,
    number: 5,
    title: "Nested Loops – Build a Floor or Grid Pattern",
    phase: "Advanced Loops",
    duration: 60,
    objective: "Students will use nested loops to create 2D structures like floors and grid patterns.",
    whatStudentsLearn: [
      "Nested loop concepts",
      "Creating 2D structures",
      "Understanding loop hierarchy",
      "Debugging nested loops",
      "Efficiency in code"
    ],
    explanation: "Nested loops are loops within loops. To create a floor (2D structure), students need one loop for rows and another for columns. This lesson introduces this powerful concept.",
    studentActivity: "Students will write code to create a floor of a specific size. Example: repeat 5 times (repeat 5 times (place block, move forward), move back, turn right, move forward, turn left). They will create different sized floors.",
    teacherTip: "Use visual aids to show nested loop structure. Have students trace through the code step-by-step. Introduce the concept of 'dimensions' in programming."
  },
  {
    id: 6,
    number: 6,
    title: "Loop Challenge – Build a Pyramid with the Agent",
    phase: "Challenges",
    duration: 60,
    objective: "Students will apply their loop knowledge to build a pyramid structure, combining nested loops with movement.",
    whatStudentsLearn: [
      "Advanced loop patterns",
      "Problem-solving with loops",
      "Planning complex structures",
      "Debugging complex code",
      "Optimization strategies"
    ],
    explanation: "A pyramid requires decreasing rows of blocks. Each row is shorter than the one below. This requires dynamic loop counts or multiple loops with different repeat values. It's a practical challenge that combines all loop concepts.",
    studentActivity: "Students will write code to build a pyramid. They can use multiple repeat blocks with different values or attempt a more advanced solution. They will test and refine their code.",
    teacherTip: "This is a challenging lesson. Provide scaffolding: start with a 3-level pyramid, then expand. Encourage students to break the problem into smaller steps. Celebrate different solutions."
  },
  {
    id: 7,
    number: 7,
    title: "If/Else – The Agent Reacts to the World",
    phase: "Conditionals",
    duration: 60,
    objective: "Students will learn conditional logic to make the Agent react to different situations in the game world.",
    whatStudentsLearn: [
      "If/Else statement structure",
      "Conditional logic",
      "Agent detection capabilities",
      "Decision-making in code",
      "Testing conditions"
    ],
    explanation: "Conditionals allow code to make decisions. The Agent can detect if there's a block in front, if it's on a specific block type, etc. If/Else statements let the Agent respond differently based on these conditions.",
    studentActivity: "Students will write code like: 'If there's a block in front, turn right. Else, move forward.' They will test this in different scenarios and observe the Agent's behavior.",
    teacherTip: "Use real-world analogies: 'If it's raining, take an umbrella. Else, don't.' Help students understand that conditionals are about making decisions based on information."
  },
  {
    id: 8,
    number: 8,
    title: "Conditionals + Movement – Agent Avoids Obstacles",
    phase: "Conditionals",
    duration: 60,
    objective: "Students will combine conditionals with movement to make the Agent navigate around obstacles.",
    whatStudentsLearn: [
      "Combining conditionals and loops",
      "Obstacle detection",
      "Pathfinding logic",
      "Complex decision-making",
      "Real-world problem solving"
    ],
    explanation: "This lesson combines loops and conditionals. The Agent needs to move forward, but if there's an obstacle, it should turn and try another direction. This simulates basic pathfinding.",
    studentActivity: "Students will create code that makes the Agent navigate around obstacles. Example: Repeat until goal (If blocked, turn right. Else, move forward). They will test in a maze-like environment.",
    teacherTip: "Set up a simple obstacle course. Have students predict what the Agent will do before running the code. Discuss how this relates to real-world navigation (GPS, robots, etc.)."
  },
  {
    id: 9,
    number: 9,
    title: "Combined Challenge – Agent Navigates a Simple Maze",
    phase: "Challenges",
    duration: 60,
    objective: "Students will apply loops, conditionals, and movement to navigate the Agent through a simple maze.",
    whatStudentsLearn: [
      "Combining multiple programming concepts",
      "Problem decomposition",
      "Debugging complex logic",
      "Testing and iteration",
      "Algorithmic thinking"
    ],
    explanation: "This is a comprehensive challenge combining all previous concepts. Students must write code that navigates the Agent through a maze using loops for repetition and conditionals for decision-making.",
    studentActivity: "Students will navigate a pre-built maze. They can use a 'wall follower' algorithm (always keep a wall on one side) or write custom logic. They will test, debug, and refine their solution.",
    teacherTip: "Provide maze templates of varying difficulty. Encourage students to document their algorithm. Discuss different maze-solving strategies. This is a great opportunity for peer learning."
  },
  {
    id: 10,
    number: 10,
    title: "Design a Farm with the Agent Using Loops",
    phase: "Creative Projects",
    duration: 60,
    objective: "Students will design and code a farm layout using loops and block placement.",
    whatStudentsLearn: [
      "Applying loops to real-world scenarios",
      "Creative problem-solving",
      "Planning and design",
      "Using different block types",
      "Combining multiple techniques"
    ],
    explanation: "Farms have repeating patterns: rows of crops, fences, paths. Students will use loops to efficiently create these patterns. This lesson emphasizes the practical application of loops.",
    studentActivity: "Students will design a farm with: crop rows (using repeat loops), fences (using loops), paths (using movement and placement). They will decide the farm's layout and code it.",
    teacherTip: "Show real farm layouts. Discuss why patterns exist in farming. Have students present their farm designs. Discuss how their code reflects the farm's structure."
  },
  {
    id: 11,
    number: 11,
    title: "Build a Village House Using Loops and Functions",
    phase: "Functions & Modularity",
    duration: 60,
    objective: "Students will use functions to create reusable code blocks for building a house structure.",
    whatStudentsLearn: [
      "Function definition and calling",
      "Code reusability",
      "Modularity in programming",
      "Parameters and arguments",
      "Abstraction"
    ],
    explanation: "Functions allow code to be organized into reusable blocks. Instead of repeating wall-building code, students create a 'buildWall' function and call it multiple times. This introduces modularity.",
    studentActivity: "Students will create functions like 'buildWall(height, width)', 'buildDoor()', 'buildRoof()'. They will use these functions to build a complete house.",
    teacherTip: "Introduce the concept of 'black boxes' – functions that do a job without needing to know the details. Discuss real-world modularity (LEGO bricks, car parts, etc.)."
  },
  {
    id: 12,
    number: 12,
    title: "Creative Build – Code a Bridge Over Water",
    phase: "Creative Projects",
    duration: 60,
    objective: "Students will design and code a bridge structure, applying all previous concepts creatively.",
    whatStudentsLearn: [
      "Combining all programming concepts",
      "Creative design",
      "Problem-solving",
      "Testing and refinement",
      "Documentation"
    ],
    explanation: "Bridges have specific requirements: they must span water, support weight, and be aesthetically pleasing. Students will code a bridge using loops, conditionals, and functions.",
    studentActivity: "Students will design a bridge (arch, suspension, or simple beam bridge) and code it. They will consider: width, height, materials, decorative elements.",
    teacherTip: "Show different bridge designs. Discuss engineering principles. Have students present their bridges and explain their design choices. Encourage creativity."
  },
  {
    id: 13,
    number: 13,
    title: "Final Project – Village Planning: Design 3 Buildings",
    phase: "Final Projects",
    duration: 60,
    objective: "Students will plan a village layout with 3 different buildings, applying design and planning skills.",
    whatStudentsLearn: [
      "Project planning",
      "Design thinking",
      "Spatial reasoning",
      "Collaboration (if group project)",
      "Documentation and presentation"
    ],
    explanation: "This is the first part of a 3-lesson final project. Students design a village with 3 buildings: a house, a farm, and a community building. They plan the layout and document their design.",
    studentActivity: "Students will sketch their village layout on paper or digitally. They will document: building types, positions, sizes, and the code structure they'll use.",
    teacherTip: "Emphasize planning. Have students present their designs before coding. Provide feedback. Discuss how planning saves time during coding."
  },
  {
    id: 14,
    number: 14,
    title: "Final Project – Village Build: Code the 3 Buildings",
    phase: "Final Projects",
    duration: 60,
    objective: "Students will code the 3 buildings they planned, applying all programming concepts.",
    whatStudentsLearn: [
      "Applying all learned concepts",
      "Code organization",
      "Debugging at scale",
      "Iterative development",
      "Problem-solving"
    ],
    explanation: "This is the second part of the final project. Students code their 3 buildings using functions, loops, and conditionals. They build on their planning from lesson 13.",
    studentActivity: "Students will write code for each building. They will use functions for reusable elements. They will test each building individually, then integrate them.",
    teacherTip: "Encourage modular code. Have students create a function for each building type. Celebrate progress. Help students debug issues."
  },
  {
    id: 15,
    number: 15,
    title: "Final Project – Connect the Village: Roads and Village Square",
    phase: "Final Projects",
    duration: 60,
    objective: "Students will complete their village by adding roads and a central village square, finalizing their project.",
    whatStudentsLearn: [
      "Project completion",
      "Attention to detail",
      "Aesthetic design",
      "Presentation skills",
      "Reflection on learning"
    ],
    explanation: "This is the final lesson. Students add roads connecting their buildings and create a central village square. They finalize their project and prepare for presentation.",
    studentActivity: "Students will code roads using path-building techniques. They will create a village square with decorative elements. They will test the complete village and make final adjustments.",
    teacherTip: "Have students present their complete villages to the class. Discuss what they learned. Celebrate their achievements. Discuss potential extensions and next steps."
  }
];

export const ISLANDS: Island[] = [
  {
    id: 1,
    name: "Island 1: Minecraft Education Block Coding",
    description: "Learn the fundamentals of block-based coding using Minecraft Education Edition. Master loops, conditionals, and functions by building structures and solving challenges.",
    icon: "🏝️",
    color: "from-blue-500 to-cyan-500",
    lessons: ISLAND_1_LESSONS
  }
];

export function getIslandById(id: number): Island | undefined {
  return ISLANDS.find(island => island.id === id);
}

export function getLessonById(islandId: number, lessonId: number): Lesson | undefined {
  const island = getIslandById(islandId);
  return island?.lessons.find(lesson => lesson.id === lessonId);
}

export function getLessonByNumber(islandId: number, lessonNumber: number): Lesson | undefined {
  const island = getIslandById(islandId);
  return island?.lessons.find(lesson => lesson.number === lessonNumber);
}
