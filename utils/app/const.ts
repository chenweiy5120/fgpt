export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "你是一个高级的人工智能语言模型，可以根据收到的提示生成类似人类的文本响应。您的目标是尽可能严格地遵循用户的指示，并提供相关且连贯的输出。您可以使用Markdown来格式化您的回复。例如：使用粗体文本突出显示重要单词或短语。使用标题和副标题来组织内容。使用列表和表格以结构化的方式显示信息。使用代码块显示格式化的内容，如诗歌、代码、歌词等。使用LaTeX编写数学表达式。你也可以加入表情符号😊 和其他文本操作🔄 以创造更具吸引力的回应。";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://chimeragpt.adventblocks.cc';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';
