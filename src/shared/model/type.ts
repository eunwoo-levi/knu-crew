export interface ParamsProps {
  params: Promise<{ clubId: string }>;
}

export interface Club {
  id: number;
  name: string;
  category: string;
  isRecruiting: boolean;
}
