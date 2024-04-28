export interface WellKnownLLMProviderDescriptor {
  name: string;
  display_name: string | null;

  api_key_required: boolean;
  api_base_required: boolean;
  api_version_required: boolean;
  custom_config_keys: string[] | null;

  llm_names: string[];
  default_model: string | null;
  default_fast_model: string | null;
}

export interface LLMProvider {
  name: string;
  api_key: string | null;
  api_base: string | null;
  api_version: string | null;
  custom_config: { [key: string]: string } | null;
  default_model_name: string;
  fast_default_model_name: string | null;
}

export interface FullLLMProvider extends LLMProvider {
  id: number;
  is_default_provider: boolean | null;
  model_names: string[];
}
