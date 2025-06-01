FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    avr-libc \
    gcc-avr \
    avrdude \
    make \
    simavr \
    socat \
    vim \
    git \
    python3 python3-pip \
    && apt-get clean


WORKDIR /workspace

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
