import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as AiLanguageModel from "@effect/ai/AiLanguageModel";
import * as AiResponse from "@effect/ai/AiResponse";
import { AiError } from "@effect/ai/AiError";
import * as OpenAiClient from "@effect/ai-openai/OpenAiClient";
import * as OpenAiLanguageModel from "@effect/ai-openai/OpenAiLanguageModel";

export interface CompletionRequest {
  readonly apiKey: string;
  readonly prompt: string;
  readonly model?: string;
}

/**
 * Request a completion from OpenAI using Effect's AI helpers.
 */
export const requestCompletion = (
  options: CompletionRequest
): Effect.Effect<AiResponse.AiResponse, AiError> =>
  AiLanguageModel.generateText({ prompt: options.prompt }).pipe(
    Effect.provideSomeLayer(
      Layer.mergeAll(
        OpenAiClient.layer({ apiKey: options.apiKey }),
        OpenAiLanguageModel.layer({ model: options.model ?? "gpt-3.5-turbo" })
      )
    )
  );
