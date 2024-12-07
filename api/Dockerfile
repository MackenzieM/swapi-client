FROM python:3.13-alpine

WORKDIR /src

RUN pip install "fastapi[standard]"

COPY ./ /src

CMD ["fastapi", "run", "src/main.py"]