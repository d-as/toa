export enum InvocationType {
  TRY_AGAIN         = 'Try Again',
  PERSISTENCE       = 'Persistence',
  SOFTCORE_RUN      = 'Softcore Run',
  HARDCORE_RUN      = 'Hardcore Run',
  WALK_FOR_IT       = 'Walk for It',
  JOG_FOR_IT        = 'Jog for It',
  RUN_FOR_IT        = 'Run for It',
  SPRINT_FOR_IT     = 'Sprint for It',
  NEED_SOME_HELP    = 'Need Some Help?',
  NEED_LESS_HELP    = 'Need Less Help?',
  NO_HELP_NEEDED    = 'No Help Needed',
  WALK_THE_PATH     = 'Walk the Path',
  PATHSEEKER        = 'Pathseeker',
  PATHFINDER        = 'Pathfinder',
  PATHMASTER        = 'Pathmaster',
  QUIET_PRAYERS     = 'Quiet Prayers',
  DEADLY_PRAYERS    = 'Deadly Prayers',
  ON_A_DIET         = 'On a Diet',
  DEHYDRATION       = 'Dehydration',
  OVERLY_DRAINING   = 'Overly Draining',
  LIVELY_LARVAE     = 'Lively Larvae',
  MORE_OVERLORDS    = 'More Overlords',
  BLOWING_MUD       = 'Blowing Mud',
  MEDIC             = 'Medic!',
  AERIAL_ASSAULT    = 'Aerial Assault',
  NOT_JUST_A_HEAD   = 'Not Just a Head',
  ARTERIAL_SPRAY    = 'Arterial Spray',
  BLOOD_THINNERS    = 'Blood Thinners',
  UPSET_STOMACH     = 'Upset Stomach',
  DOUBLE_TROUBLE    = 'Double Trouble',
  KEEP_BACK         = 'Keep Back',
  STAY_VIGILANT     = 'Stay Vigilant',
  FEELING_SPECIAL   = 'Feeling Special?',
  MIND_THE_GAP      = 'Mind the Gap!',
  GOTTA_HAVE_FAITH  = 'Gotta Have Faith',
  JUNGLE_JAPES      = 'Jungle Japes',
  SHAKING_THINGS_UP = 'Shaking Things Up',
  BOULDERDASH       = 'Boulderdash',
  ANCIENT_HASTE     = 'Ancient Haste',
  ACCELERATION      = 'Acceleration',
  PENETRATION       = 'Penetration',
  OVERCLOCKED       = 'Overclocked',
  OVERCLOCKED_2     = 'Overclocked 2',
  INSANITY          = 'Insanity',
}

export enum Category {
  ATTEMPTS       = 'Attempts',
  TIME_LIMIT     = 'Time Limit',
  HELPFUL_SPIRIT = 'Helpful Spirit',
  PATHS          = 'Paths',
  PATH_LEVEL     = 'Path Level',
  PRAYER         = 'Prayer',
  RESTORATION    = 'Restoration',
  KEPHRI         = 'Kephri',
  ZEBAK          = 'Zebak',
  AKKHA          = 'Akkha',
  BA_BA          = 'Ba-Ba',
  THE_WARDENS    = 'The Wardens',
}

export enum CategoryType {
  SINGLE   = 'Single',
  MULTIPLE = 'Multiple',
}

export interface Invocation {
  type: InvocationType;
  category: Category;
  raidLevelModifier: number;
  details?: string[];
}

export enum RaidMode {
  ENTRY  = 'Entry',
  NORMAL = 'Normal',
  EXPERT = 'Expert',
}

export const getRaidMode = (raidLevel: number): string => {
  if (raidLevel >= 300) {
    return RaidMode.EXPERT;
  } else if (raidLevel >= 150) {
    return RaidMode.NORMAL;
  }
  return RaidMode.ENTRY;
}

export const normalizeString = (value: string): string => (
  value.toLowerCase().replaceAll(' ', '_').replaceAll(/\?|!/g, '')
);

export const getInvocationId = ({ type }: Invocation): string => (
  normalizeString(type)
);

export const getIconSrc = ({ type, category }: Invocation, activated = false): string => {
  const filename = category === Category.RESTORATION ? type : category;
  return `invocations/${normalizeString(filename)}${activated ? '' : '_deactivated'}.png`;
};

export const INVOCATIONS: Invocation[] = [
  {
    type: InvocationType.TRY_AGAIN,
    category: Category.ATTEMPTS,
    raidLevelModifier: 5,
  },
  {
    type: InvocationType.PERSISTENCE,
    category: Category.ATTEMPTS,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.SOFTCORE_RUN,
    category: Category.ATTEMPTS,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.HARDCORE_RUN,
    category: Category.ATTEMPTS,
    raidLevelModifier: 25,
  },
  {
    type: InvocationType.WALK_FOR_IT,
    category: Category.TIME_LIMIT,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.JOG_FOR_IT,
    category: Category.TIME_LIMIT,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.RUN_FOR_IT,
    category: Category.TIME_LIMIT,
    raidLevelModifier: 20,
  },
  {
    type: InvocationType.SPRINT_FOR_IT,
    category: Category.TIME_LIMIT,
    raidLevelModifier: 25,
  },
  {
    type: InvocationType.NEED_SOME_HELP,
    category: Category.HELPFUL_SPIRIT,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.NEED_LESS_HELP,
    category: Category.HELPFUL_SPIRIT,
    raidLevelModifier: 25,
  },
  {
    type: InvocationType.NO_HELP_NEEDED,
    category: Category.HELPFUL_SPIRIT,
    raidLevelModifier: 40,
  },
  {
    type: InvocationType.WALK_THE_PATH,
    category: Category.PATHS,
    raidLevelModifier: 50,
  },
  {
    type: InvocationType.PATHSEEKER,
    category: Category.PATH_LEVEL,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.PATHFINDER,
    category: Category.PATH_LEVEL,
    raidLevelModifier: 40,
  },
  {
    type: InvocationType.PATHMASTER,
    category: Category.PATH_LEVEL,
    raidLevelModifier: 50,
  },
  {
    type: InvocationType.QUIET_PRAYERS,
    category: Category.PRAYER,
    raidLevelModifier: 20,
  },
  {
    type: InvocationType.DEADLY_PRAYERS,
    category: Category.PRAYER,
    raidLevelModifier: 20,
  },
  {
    type: InvocationType.ON_A_DIET,
    category: Category.RESTORATION,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.DEHYDRATION,
    category: Category.RESTORATION,
    raidLevelModifier: 30,
  },
  {
    type: InvocationType.OVERLY_DRAINING,
    category: Category.RESTORATION,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.LIVELY_LARVAE,
    category: Category.KEPHRI,
    raidLevelModifier: 5,
  },
  {
    type: InvocationType.MORE_OVERLORDS,
    category: Category.KEPHRI,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.BLOWING_MUD,
    category: Category.KEPHRI,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.MEDIC,
    category: Category.KEPHRI,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.AERIAL_ASSAULT,
    category: Category.KEPHRI,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.NOT_JUST_A_HEAD,
    category: Category.ZEBAK,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.ARTERIAL_SPRAY,
    category: Category.ZEBAK,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.BLOOD_THINNERS,
    category: Category.ZEBAK,
    raidLevelModifier: 5,
  },
  {
    type: InvocationType.UPSET_STOMACH,
    category: Category.ZEBAK,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.DOUBLE_TROUBLE,
    category: Category.AKKHA,
    raidLevelModifier: 20,
  },
  {
    type: InvocationType.KEEP_BACK,
    category: Category.AKKHA,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.STAY_VIGILANT,
    category: Category.AKKHA,
    raidLevelModifier: 15,
  },
  {
    type: InvocationType.FEELING_SPECIAL,
    category: Category.AKKHA,
    raidLevelModifier: 20,
  },
  {
    type: InvocationType.MIND_THE_GAP,
    category: Category.BA_BA,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.GOTTA_HAVE_FAITH,
    category: Category.BA_BA,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.JUNGLE_JAPES,
    category: Category.BA_BA,
    raidLevelModifier: 5,
  },
  {
    type: InvocationType.SHAKING_THINGS_UP,
    category: Category.BA_BA,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.BOULDERDASH,
    category: Category.BA_BA,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.ANCIENT_HASTE,
    category: Category.THE_WARDENS,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.ACCELERATION,
    category: Category.THE_WARDENS,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.PENETRATION,
    category: Category.THE_WARDENS,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.OVERCLOCKED,
    category: Category.THE_WARDENS,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.OVERCLOCKED_2,
    category: Category.THE_WARDENS,
    raidLevelModifier: 10,
  },
  {
    type: InvocationType.INSANITY,
    category: Category.THE_WARDENS,
    raidLevelModifier: 50,
  },
];

export const CATEGORIES: Record<Category, CategoryType> = {
  [Category.ATTEMPTS]:       CategoryType.SINGLE,
  [Category.TIME_LIMIT]:     CategoryType.SINGLE,
  [Category.HELPFUL_SPIRIT]: CategoryType.SINGLE,
  [Category.PATHS]:          CategoryType.SINGLE,
  [Category.PATH_LEVEL]:     CategoryType.SINGLE,
  [Category.PRAYER]:         CategoryType.MULTIPLE,
  [Category.RESTORATION]:    CategoryType.MULTIPLE,
  [Category.KEPHRI]:         CategoryType.MULTIPLE,
  [Category.ZEBAK]:          CategoryType.MULTIPLE,
  [Category.AKKHA]:          CategoryType.MULTIPLE,
  [Category.BA_BA]:          CategoryType.MULTIPLE,
  [Category.THE_WARDENS]:    CategoryType.MULTIPLE,
};

export const getInvocationsByCategory = (category: Category): Invocation[] => (
  INVOCATIONS.filter(invocation => invocation.category === category)
);

export const getCategoryType = (invocation: Invocation): CategoryType => (
  CATEGORIES[invocation.category]
);

const ENCODE_DECODE_BASE = 36;

const validInvocations = (invocations: Invocation[]): boolean => {
  const categories = Array.from(new Set(invocations.map(invocation => invocation.category)));
  const singleSelectionCategories = categories.filter(category => CATEGORIES[category] === CategoryType.SINGLE);
  return !singleSelectionCategories.some(category => invocations.filter(inv => inv.category === category).length > 1);
};

export const encodeInvocations = (invocations: Invocation[]): string => {
  if (!validInvocations(invocations)) {
    return '';
  }

  const invocationSet = new Set(invocations.map(invocation => invocation.type));

  const value =
    INVOCATIONS
      .map(invocation => invocationSet.has(invocation.type) ? '1' : '0')
      .join('');
  
  return parseInt(value, 2).toString(ENCODE_DECODE_BASE);
};

export const decodeInvocations = (hash: string): Invocation[] => {
  const value = hash.slice(1);

  if (!value) {
    return [];
  }

  const invocations =
    parseInt(value, ENCODE_DECODE_BASE)
      .toString(2)
      .padStart(INVOCATIONS.length, '0')
      .split('')
      .map((c, i) => c === '1' ? INVOCATIONS[i] : undefined)
      .filter(x => x) as Invocation[];

  return validInvocations(invocations) ? invocations : [];
};
