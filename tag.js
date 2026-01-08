document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tag = params.get("tag");
  const list = document.getElementById("tag-list");
  const title = document.getElementById("title");
  const tabTitle = document.getElementById("tab-title");
  const description = document.getElementById("description");
  title.innerHTML = tag.replace(/-/g, " ");
  tabTitle.innerHTML = tag.replace(/-/g, " ") + " | MacVG";
  switch (title.innerHTML) {
    case "RPG Games":
      description.innerHTML =
        "RPG games let you create or play as a character, explore worlds, go on adventures, and take on fun quests. You can level up, collect gear, fight enemies, and make choices that shape the story.";
      break;
    case "Car Racing Games":
      description.innerHTML =
        "Car racing games put you behind the wheel to race on cool tracks and compete for the win. You can customize cars, upgrade components, master tight turns, and speed past rivals.";
      break;
    case "Shooter Games":
      description.innerHTML =
        "Shooter games drop you into action-packed battles where you aim, shoot, and take down enemies. You can use different weapons, explore maps, and test your skills in fast-paced fights.";
      break;
    case "Survival Games":
      description.innerHTML =
        "Survival games challenge you to stay alive in harsh environments, gather resources, and build shelters. You’ll face dangers like wild animals, hunger, and other players as you try to survive.";
      break;
    case "Point and Click Strategy Games":
      description.innerHTML =
        "Point and click strategy games let you solve puzzles and uncover secrets by interacting with the environment. You explore different locations, find clues, and piece together the story as you go.";
      break;
    case "Text Based Strategy Games":
      description.innerHTML =
        "Text-based strategy games rely on your choices and clever thinking to make decisions and outsmart opponents. You’ll navigate through stories, plan moves, and solve challenges using just text.";
      break;
    case "Run and Gun Games":
      description.innerHTML =
        "Run and gun games keep you on the move as you blast through enemies and dodge obstacles. With fast-paced action, you’ll be shooting, jumping, and powering through levels.";
      break;
    case "Platformer Games":
      description.innerHTML =
        "Platformer games have you jumping, running, and avoiding obstacles as you make your way through levels. You’ll explore fun environments, collect items, and face tricky challenges along the way.";
      break;
    case "Reaction Games":
      description.innerHTML =
        "Reaction games test your reflexes as you quickly respond to on-screen events. You’ll need fast thinking and quick movements to beat challenges and get high scores.";
      break;
    case "Shooting Games":
      description.innerHTML =
        "Shooting games focus on aiming and taking precise shots at targets. You’ll need accuracy and timing to hit moving targets and complete challenges.";
      break;
    case "Horror Games":
      description.innerHTML =
        "Horror games immerse you in creepy worlds full of suspense, danger, and unexpected scares. You’ll explore dark environments, solve puzzles, and try to survive terrifying encounters.";
      break;
    case "Escaping Games":
      description.innerHTML =
        "Escaping games challenge you to solve puzzles and find clues to break out of tricky situations or locked rooms. You’ll need to think quickly and piece together hints to escape before time runs out.";
      break;
    case "Arcade Games":
      description.innerHTML =
        "Arcade games are all about quick, simple fun with fast-paced action and high scores. You’ll be dodging, jumping, and shooting through levels, aiming to beat your best performance.";
      break;
    case "Action Games":
      description.innerHTML =
        "Action games are packed with fast-paced combat, intense missions, and exciting challenges. You’ll fight enemies, explore new areas, and face thrilling moments that keep you on your toes.";
      break;
    case "Tower Defense Games":
      description.innerHTML =
        "Tower defense games have you set up defenses to stop waves of enemies from reaching your goal. You’ll strategically place towers, upgrade them, and defend your base from increasing threats.";
      break;
    case "Adventure Games":
      description.innerHTML =
        "Adventure games let you explore new worlds, solve puzzles, and uncover stories. You’ll take on quests and face challenges as you go.";
      break;
    case "Empire Games":
      description.innerHTML =
        "Empire games let you build and manage your own kingdom, expand territories, and lead armies. You’ll make strategic decisions to grow your empire and conquer rivals.";
      break;
    case "Teamwork Games":
      description.innerHTML =
        "Teamwork games focus on collaborating with others to complete goals and solve challenges. You’ll need to communicate and work together to win as a team.";
      break;
    case "Timing Games":
      description.innerHTML =
        "Timing games test your ability to act at the perfect moment. You’ll need quick reflexes to hit targets, avoid obstacles, or complete tasks within a set time.";
      break;
    case "Dueling Games":
      description.innerHTML =
        "Dueling games pit you against another player in one-on-one combat. You’ll need quick reflexes and strategy to outsmart and defeat your opponent.";
      break;
    case "Endless Runner Games":
      description.innerHTML =
        "Endless runner games have you running through never-ending levels, dodging obstacles and collecting items. You’ll try to go as far as possible while avoiding dangers and beating your high score.";
      break;
    case "Motorcycle Games":
      description.innerHTML =
        "Motorcycle games put you in control of fast bikes, racing through tracks or performing stunts. You’ll dodge obstacles, speed through levels, and show off your skills on two wheels.";
      break;
    case "Progression Games":
      description.innerHTML =
        "Progression games have you leveling up, unlocking new abilities, and advancing through stages. You’ll gradually get stronger and face tougher challenges as you move forward.";
      break;
    case "Management Games":
      description.innerHTML =
        "Management games let you take control of businesses, teams, or resources. You’ll plan, organize, and make decisions to grow and succeed in your goals.";
      break;
    case "Casual Games":
      description.innerHTML =
        "Casual games are easy to pick up and play, offering simple mechanics and fun challenges. They’re perfect for quick sessions, whether you’re relaxing or on the go.";
      break;
    case "Clicker Games":
      description.innerHTML =
        "Clicker games are all about tapping to earn resources and unlock upgrades. The more you click, the faster you progress and grow your rewards.";
      break;
    case "Merging Games":
      description.innerHTML =
        "Merging games have you combining items to create better ones and unlock new levels. You’ll strategize and match to keep upgrading and expanding.";
      break;
    case "Time Waster Games":
      description.innerHTML =
        "Time waster games are simple and fun, perfect for killing time and relaxing. You can play casually without worrying about goals or pressure.";
      break;
    case "Fake Games":
      description.innerHTML =
        "Fake games parody real ones with silly twists, funny mechanics, or over-the-top concepts. They’re all about having fun and not taking things too seriously.";
      break;
    case "Guessing Games":
      description.innerHTML =
        "Guessing games challenge you to figure out the answer with limited clues. You’ll test your knowledge, logic, and intuition to make the right guess.";
      break;
    case "Relaxing Games":
      description.innerHTML =
        "Relaxing games are calm and easygoing, designed to help you unwind. You’ll enjoy soothing visuals, simple tasks, and a stress-free experience.";
      break;
    case "Idle Games":
      description.innerHTML =
        "Idle games let you earn rewards and progress even when you’re not actively playing. You’ll set things in motion, upgrade, and watch your progress grow over time.";
      break;
    case "Soccer Games":
      description.innerHTML =
        "Soccer games let you control teams, score goals, and experience the thrill of the sport. You’ll dribble, pass, and shoot your way to victory in exciting matches.";
      break;
    case "Sports Arcade Games":
      description.innerHTML =
        "Sports arcade games bring fast-paced action to sports like basketball, football, and soccer. You’ll aim for high scores, compete in mini-games, and enjoy quick, fun gameplay.";
      break;
    case "Biking Games":
      description.innerHTML =
        "Biking games put you in the saddle, racing or performing stunts on bikes. You’ll tackle challenging tracks, dodge obstacles, and show off your skills on two wheels.";
      break;
    case "Car Simulation Games":
      description.innerHTML =
        "Car simulation games let you experience realistic driving with detailed vehicles and environments. You’ll test your skills on different terrains, follow traffic rules, or just cruise around.";
      break;
    case "Physics Based Strategy Games":
      description.innerHTML =
        "Physics-based strategy games use the laws of physics to create unique challenges. You’ll plan your moves carefully, using momentum, gravity, and other forces to solve puzzles or defeat enemies.";
      break;
    case "Physics Based Strategy Games":
      description.innerHTML =
        "Physics-based strategy games use the laws of physics to create unique challenges. You’ll plan your moves carefully, using momentum, gravity, and other forces to solve puzzles or defeat enemies.";
      break;
    case "Number Games":
      description.innerHTML =
        "Number games focus on solving puzzles and challenges using math and numbers. You’ll use logic and strategy to figure out equations, patterns, or sequences.";
      break;
    case "Puzzle Games":
      description.innerHTML =
        "Puzzle games challenge your brain with tricky problems and hidden solutions. You’ll solve riddles, match patterns, or piece things together to progress through levels.";
      break;
    case "Parking Games":
      description.innerHTML =
        "Parking games test your skills at maneuvering vehicles into tight spots. You’ll need precision and timing to park without hitting obstacles or other cars.";
      break;
    case "Word Games":
      description.innerHTML =
        "Word games challenge your vocabulary and quick thinking. You’ll create words, solve crosswords, or find hidden letters to complete puzzles and score points.";
      break;
    case "Card Games":
      description.innerHTML =
        "Card games involve strategy and luck as you play with decks of cards. You’ll compete against others or solve challenges by matching, bluffing, or collecting sets of cards.";
      break;
    case "Football Games":
      description.innerHTML =
        "Football games let you control teams, make passes, and score touchdowns in fast-paced action. You’ll strategize, dodge opponents, and lead your team to victory on the field.";
      break;
    default:
      description.innerHTML = "Popular games across various genres.";
      break;
  }
  let newArray = [];
  fetch("games.json")
    .then((response) => response.json())
    .then((dataa) => {
      let data = dataa.games;
      for (var i = 0; i < data.length; i++) {
        newArray.push(data[i]);
      }
      newArray.forEach((game) => {
        if (game.genre.replace(/ /g, "-") == tag) {
          let newGameElement = document.createElement("div");
          newGameElement.classList.add("game");
          newGameElement.innerHTML = game.name;
          list.appendChild(newGameElement);
          let newGameID = game.id;
          newGameElement.style.backgroundImage = `url(${
            game.link + game.thumb
          })`;
          newGameElement.addEventListener("click", () => {
            const params = new URLSearchParams({ target: newGameID });
            window.location.href = `${newArray.find(g=>g.id===parseInt(newGameID))?.slug || newGameID}.html`;
          });
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
