export type ClassType = 'Elfa' | 'Mago' | 'Lorde' | 'Cavaleiro';

export interface Player {
  id: string;
  name: string;
  class: ClassType;
  cp: string; // Combat Power
  dkp: number;
  role: 'DPS' | 'Tank' | 'Healer';
  avatarUrl: string;
  status: 'Online' | 'Offline';
}

export type Rarity = 'Lendário' | 'Épico' | 'Raro' | 'Incomum' | 'Comum';

export interface Item {
  id: string;
  name: string;
  rarity: Rarity;
  stats: string;
  chance: string;
  iconUrl: string;
  cost: number; // DKP Cost
  lastRecipientId?: string; // ID of the last player who received this item
  limitToTop5?: boolean; // If true, only the top 5 players are eligible
}

export type LootStatus = 'Conquistado' | 'Passou' | 'Ausente' | 'Não Pegou';

export interface LootEvent {
  id: string;
  itemId: string;
  playerId: string; // Winner or related player
  status: LootStatus;
  date: string;
  raidName: string;
  cost: number; // Positive if spent, 0 if passed/absent
}

// For the Admin distribution queue
export interface DistributableItem {
  id: string;
  name: string;
  quantity: number;
}