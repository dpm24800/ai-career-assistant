# from fastapi import FastAPI

# app = FastAPI()

# @app.get("/")
# def read_root():
#     return {"message": "ML Service running"}


from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ResumeRequest(BaseModel):
    text: str

@app.post("/analyze")
def analyze_resume(data: ResumeRequest):
    # Beginner fake ML logic
    word_count = len(data.text.split())

    return {
        "score": word_count,
        "message": "Basic analysis complete"
    }
