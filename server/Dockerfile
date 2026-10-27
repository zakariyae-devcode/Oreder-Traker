FROM python:3.14.8-slim
 
FROM python:3.14.8-slim

RUN pip install --no-cache-dir uv

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

 

 
WORKDIR /app
 

COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-dev
 
COPY . .
 
EXPOSE 8000
 
CMD ["uv", "run", "gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]