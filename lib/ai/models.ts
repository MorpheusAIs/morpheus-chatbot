export const DEFAULT_CHAT_MODEL = "glm-5";

export const titleModel = {
  id: "glm-5",
  name: "GLM 5",
  provider: "morpheus",
  description: "Powerful reasoning model with 200K context and function calling",
};

export type ModelCapabilities = {
  tools: boolean;
  vision: boolean;
  reasoning: boolean;
};

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "kimi-k2.5",
    name: "Kimi K2.5",
    provider: "morpheus",
    description: "Flagship model with 256K context, vision, reasoning, and code capabilities",
  },
  {
    id: "glm-5",
    name: "GLM 5",
    provider: "morpheus",
    description: "Powerful reasoning model with 200K context and function calling",
  },
  {
    id: "glm-4.7-flash",
    name: "GLM 4.7 Flash",
    provider: "morpheus",
    description: "Fast reasoning model with 200K context and function calling",
  },
  {
    id: "Gemma-4-31b",
    name: "Gemma 4 31B",
    provider: "morpheus",
    description: "Reasoning and vision model with 256K context",
  },
  {
    id: "MiniMax-M2.5",
    name: "MiniMax M2.5",
    provider: "morpheus",
    description: "Code and reasoning specialist with 198K context",
  },
];

export const isDemo = process.env.IS_DEMO === "1";

export type GatewayModelWithCapabilities = ChatModel & {
  capabilities: ModelCapabilities;
};

export function getActiveModels(): ChatModel[] {
  return chatModels;
}

export const allowedModelIds = new Set(chatModels.map((m) => m.id));

export const modelsByProvider = chatModels.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);
