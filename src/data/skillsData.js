const skillsData = [

  /* DIMACHAERUS SKILLS */
  {
    id: 0,
    name: "Power Strike",
    gladiator: "Dimachaerus",
    uses: 1,
    used: false,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 9,
    multiplier: 0.5,
    attacks: 1,
    maxAttacks: 1,
    lvlUnlock: 1,
    animation: "power-slash",
    disableTurns: 0,
    addClass: "",
    animContainer: "skill-animation",
    description: "Strike your opponent with all your strength, dealing extra damage."
  },
  {
    id: 1,
    name: "Dual Slash",
    gladiator: "Dimachaerus",
    uses: 1,
    used: false,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 4,
    multiplier: 0.5,
    attacks: 2,
    maxAttacks: 2,
    lvlUnlock: 2,
    animation: "dual-slash",
    disableTurns: 0,
    addClass: "",
    animContainer: "skill-animation",
    description: "Slash at your opponent with both weapons."
  },
  {
    id: 2,
    name: "Dual Wield",
    gladiator: "Dimachaerus",
    passive: true,
    buff: false,
    passiveEffect: "dual-wield",
    animation: "dual-wield",
    lvlUnlock: 4,
    disableTurns: 0,
    addClass: "",
    animContainer: "skill-animation",
    description: "Passive Skill. You have become skilled in the art of two-weapon combat. You will sometimes attack with both weapons at once. More dextrous gladiators can better master this art."
  },
  {
    id: 3,
    name: "Riposte",
    gladiator: "Dimachaerus",
    used: false,
    passive: false,
    buff: true,
    buffEffect: {
      name: "riposte",
      duration: 3,
      maxDuration: 3
    },
    uses: 1,
    maxUses: 1,
    lvlUnlock: 6,
    animation: "riposte-buff",
    disableTurns: 0,
    addClass: "",
    animContainer: "skill-animation",
    description: "Take a defensive stance, allowing you to immediately retaliate when you block an attack. You can maintain this stance for several turns."
  },
  {
    id: 4,
    name: "Pinpoint",
    gladiator: "Dimachaerus",
    uses: 1,
    used: false,
    bleed: true,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 4,
    multiplier: 0.5,
    attacks: 1,
    maxAttacks: 1,
    lvlUnlock: 8,
    animation: "pinpoint",
    disableTurns: 1,
    disableMessage: "Paralyzed!",
    addClass: "",
    animContainer: "skill-animation",
    description: "A series of quick stabs to the most vulnerable parts of your opponent's body. Slows your opponent's attack speed, briefly stuns them, and severs their arteries."
  },
  {
    id: 5,
    name: "Champion",
    gladiator: "Dimachaerus",
    used: false,
    passive: false,
    buff: true,
    buffEffect: {
      name: "champion",
      duration: 6,
      maxDuration: 6
    },
    uses: 1,
    maxUses: 1,
    lvlUnlock: 10,
    animation: "champion-buff",
    disableTurns: 0,
    addClass: "",
    animContainer: "skill-animation",
    description: "Your glorious victories have made you a champion of the arena. Call upon the crowd to gain their favor, increasing your prowess in battle."
  },

    /* SECUTOR SKILLS */

  {
    id: 6,
    name: "Power Strike",
    gladiator: "Secutor",
    uses: 1,
    used: false,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 9,
    multiplier: 0.5,
    attacks: 1,
    maxAttacks: 1,
    lvlUnlock: 1,
    animation: "power-slash",
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Strike your opponent with all your strength, dealing extra damage."
  },
  {
    id: 7,
    name: "Shield Bash",
    gladiator: "Secutor",
    uses: 1,
    used: false,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 0,
    multiplier: 0.3,
    attacks: 1,
    maxAttacks: 1,
    lvlUnlock: 2,
    animation: "shield-bash",
    disableTurns: 2,
    disableMessage: "Stunned!!!",
    animContainer: "skill-animation",
    description: "Slam your shield into your opponent, dealing increased damage based on your block value and stunning temporarily."
  },
  {
    id: 8,
    name: "Sever",
    gladiator: "Secutor",
    passive: true,
    buff: false,
    passiveEffect: "sever",
    animation: "sever",
    lvlUnlock: 4,
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Passive Skill. Your strong arm and keen eye allow you to strike with strength and precision. Critical hits may dismember your opponent."
  },
  {
    id: 9,
    name: "Rage",
    gladiator: "Secutor",
    uses: 1,
    used: false,
    passive: false,
    buff: true,
    buffEffect: {
      name: "rage",
      duration: 7,
      maxDuration: 7
    },
    maxUses: 1,
    lvlUnlock: 6,
    animation: "rage-buff",
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Activate to unleash your rage. For several turns, every time you block you feel a rush of adrenaline, increasing the strength of your attacks."
  },
  {
    id: 10,
    name: "Execute",
    gladiator: "Secutor",
    uses: 1,
    used: false,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 0,
    multiplier: 0.5,
    executeBonus: function (maxHp, currHp, disabled) {
      let exeBonus = Math.ceil((maxHp/currHp)*4)
      if (disabled > 0) {exeBonus += 10}
      return exeBonus
    },
    attacks: 1,
    maxAttacks: 1,
    lvlUnlock: 8,
    animation: "execute",
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Give the crowd what they want. This decisive strike deals increased damage to wounded and stunned opponents, and has a chance to decapitate."
  },
  {
    id: 11,
    name: "Champion",
    gladiator: "Secutor",
    used: false,
    passive: false,
    buff: true,
    buffEffect: {
      name: "champion",
      duration: 6,
      maxDuration: 6
    },
    uses: 1,
    maxUses: 1,
    lvlUnlock: 10,
    animation: "champion-buff",
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Your glorious victories have made you a champion of the arena. Call upon the crowd to gain their favor, increasing your prowess in battle."
  },

      /* RETIARIUS SKILLS */

  {
    id: 12,
    name: "Power Strike",
    gladiator: "Retiarius",
    uses: 1,
    used: false,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 9,
    multiplier: 0.5,
    attacks: 1,
    maxAttacks: 1,
    lvlUnlock: 1,
    animation: "power-slash",
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Strike your opponent with all your strength, dealing extra damage."
  },
  {
    id: 13,
    name: "Throw Net",
    gladiator: "Retiarius",
    uses: 10,
    used: false,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 0,
    multiplier: 0.01,
    attacks: 1,
    maxAttacks: 1,
    lvlUnlock: 2,
    animation: "throw-net",
    disableTurns: 4,
    disableMessage: "Trapped!!!",
    animContainer: "net-animation",
    description: "Throw your net at your opponent, entangling and trapping them for several rounds."
  },
  {
    id: 14,
    name: "Prod",
    gladiator: "Retiarius",
    used: false,
    passive: true,
    buff: false,
    passiveEffect: "prod",
    animation: "prod",
    lvlUnlock: 4,
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Passive Skill. Your skill with the trident allows you to stay at a distance, reducing the chance your enemy will hit you or land a critical strike."
  },
  {
    id: 15,
    name: "Poison Trident",
    gladiator: "Retiarius",
    used: false,
    passive: false,
    buff: true,
    buffEffect: {
      name: "poisonTrident",
      duration: 7,
      maxDuration: 7
    },
    uses: 1,
    maxUses: 1,
    lvlUnlock: 6,
    animation: "poison-trident-buff",
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Rub a deadly poison on the tips of your trident, making your normal attacks infect your opponent. Don't worry, anything goes in the arena."
  },
  {
    id: 16,
    name: "Trident Rake",
    gladiator: "Retiarius",
    uses: 1,
    used: false,
    bleed: true,
    passive: false,
    buff: false,
    maxUses: 1,
    dmgBonus: 9,
    multiplier: 0.5,
    attacks: 1,
    maxAttacks: 1,
    lvlUnlock: 8,
    animation: "trident-rake",
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Slash with the three prongs of your trident to cause a deep, gushing wound for heavy bleeding damage."
  },
  {
    id: 17,
    name: "Champion",
    gladiator: "Retiarius",
    used: false,
    passive: false,
    buff: true,
    buffEffect: {
      name: "champion",
      duration: 6,
      maxDuration: 6
    },
    uses: 1,
    maxUses: 1,
    lvlUnlock: 10,
    animation: "champion-buff",
    disableTurns: 0,
    animContainer: "skill-animation",
    description: "Your glorious victories have made you a champion of the arena. Call upon the crowd to gain their favor, increasing your prowess in battle."
  }
]




export default skillsData;