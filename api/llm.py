import os
from langchain.chat_models import ChatOpenAI


def load_llm_model() -> ChatOpenAI:
    chat_model = ChatOpenAI(openai_api_key=os.environ['OPENAI_API_KEY'], 
                            model="gpt-3.5-turbo")
    return chat_model