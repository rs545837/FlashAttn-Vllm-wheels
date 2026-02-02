// vLLM Pre-built Wheels - Complete list from GitHub releases
// Source: https://github.com/vllm-project/vllm/releases

const vllmWheels = [
  // v0.15.0
  { v: "0.15.0", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "509 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.15.0/vllm-0.15.0-cp38-abi3-manylinux_2_31_x86_64.whl" },
  { v: "0.15.0", cuda: "12.9", py: "3.8+", os: "linux_aarch64", size: "461 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.15.0/vllm-0.15.0-cp38-abi3-manylinux_2_31_aarch64.whl" },
  { v: "0.15.0", cuda: "13.0", py: "3.8+", os: "linux_x86_64", size: "281 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.15.0/vllm-0.15.0%2Bcu130-cp38-abi3-manylinux_2_35_x86_64.whl" },
  { v: "0.15.0", cuda: "13.0", py: "3.8+", os: "linux_aarch64", size: "266 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.15.0/vllm-0.15.0%2Bcu130-cp38-abi3-manylinux_2_35_aarch64.whl" },
  { v: "0.15.0", cuda: "cpu", py: "3.8+", os: "linux_x86_64", size: "35 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.15.0/vllm-0.15.0%2Bcpu-cp38-abi3-manylinux_2_35_x86_64.whl" },
  { v: "0.15.0", cuda: "cpu", py: "3.8+", os: "linux_aarch64", size: "31 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.15.0/vllm-0.15.0%2Bcpu-cp38-abi3-manylinux_2_35_aarch64.whl" },

  // v0.14.1
  { v: "0.14.1", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "495 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.1/vllm-0.14.1-cp38-abi3-manylinux_2_31_x86_64.whl" },
  { v: "0.14.1", cuda: "12.9", py: "3.8+", os: "linux_aarch64", size: "448 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.1/vllm-0.14.1-cp38-abi3-manylinux_2_31_aarch64.whl" },
  { v: "0.14.1", cuda: "13.0", py: "3.8+", os: "linux_x86_64", size: "275 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.1/vllm-0.14.1%2Bcu130-cp38-abi3-manylinux_2_35_x86_64.whl" },
  { v: "0.14.1", cuda: "13.0", py: "3.8+", os: "linux_aarch64", size: "260 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.1/vllm-0.14.1%2Bcu130-cp38-abi3-manylinux_2_35_aarch64.whl" },
  { v: "0.14.1", cuda: "cpu", py: "3.8+", os: "linux_x86_64", size: "34 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.1/vllm-0.14.1%2Bcpu-cp38-abi3-manylinux_2_35_x86_64.whl" },
  { v: "0.14.1", cuda: "cpu", py: "3.8+", os: "linux_aarch64", size: "29 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.1/vllm-0.14.1%2Bcpu-cp38-abi3-manylinux_2_35_aarch64.whl" },

  // v0.14.0
  { v: "0.14.0", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "495 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.0/vllm-0.14.0-cp38-abi3-manylinux_2_31_x86_64.whl" },
  { v: "0.14.0", cuda: "12.9", py: "3.8+", os: "linux_aarch64", size: "448 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.0/vllm-0.14.0-cp38-abi3-manylinux_2_31_aarch64.whl" },
  { v: "0.14.0", cuda: "13.0", py: "3.8+", os: "linux_x86_64", size: "275 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.0/vllm-0.14.0%2Bcu130-cp38-abi3-manylinux_2_35_x86_64.whl" },
  { v: "0.14.0", cuda: "13.0", py: "3.8+", os: "linux_aarch64", size: "260 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.0/vllm-0.14.0%2Bcu130-cp38-abi3-manylinux_2_35_aarch64.whl" },
  { v: "0.14.0", cuda: "cpu", py: "3.8+", os: "linux_x86_64", size: "34 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.0/vllm-0.14.0%2Bcpu-cp38-abi3-manylinux_2_35_x86_64.whl" },
  { v: "0.14.0", cuda: "cpu", py: "3.8+", os: "linux_aarch64", size: "29 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.14.0/vllm-0.14.0%2Bcpu-cp38-abi3-manylinux_2_35_aarch64.whl" },

  // v0.13.0
  { v: "0.13.0", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "475 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.13.0/vllm-0.13.0-cp38-abi3-manylinux_2_31_x86_64.whl" },
  { v: "0.13.0", cuda: "12.9", py: "3.8+", os: "linux_aarch64", size: "442 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.13.0/vllm-0.13.0-cp38-abi3-manylinux_2_31_aarch64.whl" },
  { v: "0.13.0", cuda: "13.0", py: "3.8+", os: "linux_x86_64", size: "267 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.13.0/vllm-0.13.0%2Bcu130-cp38-abi3-manylinux_2_35_x86_64.whl" },
  { v: "0.13.0", cuda: "13.0", py: "3.8+", os: "linux_aarch64", size: "258 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.13.0/vllm-0.13.0%2Bcu130-cp38-abi3-manylinux_2_35_aarch64.whl" },
  { v: "0.13.0", cuda: "cpu", py: "3.8+", os: "linux_x86_64", size: "31 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.13.0/vllm-0.13.0%2Bcpu-cp38-abi3-manylinux_2_35_x86_64.whl" },
  { v: "0.13.0", cuda: "cpu", py: "3.8+", os: "linux_aarch64", size: "26 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.13.0/vllm-0.13.0%2Bcpu-cp38-abi3-manylinux_2_35_aarch64.whl" },

  // v0.12.0
  { v: "0.12.0", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "467 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.12.0/vllm-0.12.0-cp38-abi3-manylinux_2_31_x86_64.whl" },
  { v: "0.12.0", cuda: "12.9", py: "3.8+", os: "linux_aarch64", size: "436 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.12.0/vllm-0.12.0-cp38-abi3-manylinux_2_31_aarch64.whl" },
  { v: "0.12.0", cuda: "13.0", py: "3.8+", os: "linux_x86_64", size: "265 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.12.0/vllm-0.12.0%2Bcu130-cp38-abi3-manylinux_2_31_x86_64.whl" },

  // v0.11.2
  { v: "0.11.2", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "370 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.2/vllm-0.11.2-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.11.2", cuda: "12.8", py: "3.8+", os: "linux_aarch64", size: "369 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.2/vllm-0.11.2-cp38-abi3-manylinux2014_aarch64.whl" },
  { v: "0.11.2", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "399 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.2/vllm-0.11.2%2Bcu129-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.11.2", cuda: "13.0", py: "3.8+", os: "linux_x86_64", size: "231 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.2/vllm-0.11.2%2Bcu130-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.11.1
  { v: "0.11.1", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "371 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.1/vllm-0.11.1-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.11.1", cuda: "12.8", py: "3.8+", os: "linux_aarch64", size: "369 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.1/vllm-0.11.1-cp38-abi3-manylinux2014_aarch64.whl" },
  { v: "0.11.1", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "399 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.1/vllm-0.11.1%2Bcu129-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.11.1", cuda: "13.0", py: "3.8+", os: "linux_x86_64", size: "231 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.1/vllm-0.11.1%2Bcu130-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.11.0
  { v: "0.11.0", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "438 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.0/vllm-0.11.0-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.11.0", cuda: "12.8", py: "3.8+", os: "linux_aarch64", size: "401 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.0/vllm-0.11.0-cp38-abi3-manylinux2014_aarch64.whl" },
  { v: "0.11.0", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "460 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.11.0/vllm-0.11.0%2Bcu129-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.10.2
  { v: "0.10.2", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "436 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.2/vllm-0.10.2-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.10.2", cuda: "12.9", py: "3.8+", os: "linux_x86_64", size: "432 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.2/vllm-0.10.2%2Bcu129-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.10.2", cuda: "12.9", py: "3.8+", os: "linux_aarch64", size: "399 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.2/vllm-0.10.2%2Bcu129-cp38-abi3-manylinux2014_aarch64.whl" },

  // v0.10.1.1
  { v: "0.10.1.1", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "414 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.1.1/vllm-0.10.1.1-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.10.1.1", cuda: "12.8", py: "3.8+", os: "linux_aarch64", size: "349 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.1.1/vllm-0.10.1.1-cp38-abi3-manylinux1_aarch64.whl" },
  { v: "0.10.1.1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "251 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.1.1/vllm-0.10.1.1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.10.1
  { v: "0.10.1", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "414 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.1/vllm-0.10.1-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.10.1", cuda: "12.8", py: "3.8+", os: "linux_aarch64", size: "349 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.1/vllm-0.10.1-cp38-abi3-manylinux1_aarch64.whl" },
  { v: "0.10.1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "251 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.1/vllm-0.10.1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.10.0
  { v: "0.10.0", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "387 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.0/vllm-0.10.0-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.10.0", cuda: "12.6", py: "3.8+", os: "linux_x86_64", size: "361 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.0/vllm-0.10.0%2Bcu126-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.10.0", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "245 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.10.0/vllm-0.10.0%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.9.2
  { v: "0.9.2", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "383 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.2/vllm-0.9.2-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.9.2", cuda: "12.6", py: "3.8+", os: "linux_x86_64", size: "359 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.2/vllm-0.9.2%2Bcu126-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.9.2", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "243 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.2/vllm-0.9.2%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.9.1
  { v: "0.9.1", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "395 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.1/vllm-0.9.1-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.9.1", cuda: "12.6", py: "3.8+", os: "linux_x86_64", size: "340 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.1/vllm-0.9.1%2Bcu126-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.9.1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "225 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.1/vllm-0.9.1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.9.0.1
  { v: "0.9.0.1", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "377 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.0.1/vllm-0.9.0.1-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.9.0.1", cuda: "12.6", py: "3.8+", os: "linux_x86_64", size: "323 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.0.1/vllm-0.9.0.1%2Bcu126-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.9.0.1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "208 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.0.1/vllm-0.9.0.1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.9.0
  { v: "0.9.0", cuda: "12.8", py: "3.8+", os: "linux_x86_64", size: "377 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.0/vllm-0.9.0-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.9.0", cuda: "12.6", py: "3.8+", os: "linux_x86_64", size: "323 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.0/vllm-0.9.0%2Bcu126-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.9.0", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "208 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.9.0/vllm-0.9.0%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.8.5.post1
  { v: "0.8.5.post1", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "326 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.5.post1/vllm-0.8.5.post1-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.5.post1", cuda: "12.1", py: "3.8+", os: "linux_x86_64", size: "214 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.5.post1/vllm-0.8.5.post1%2Bcu121-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.5.post1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "214 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.5.post1/vllm-0.8.5.post1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.8.5
  { v: "0.8.5", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "326 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.5/vllm-0.8.5-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.5", cuda: "12.1", py: "3.8+", os: "linux_x86_64", size: "214 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.5/vllm-0.8.5%2Bcu121-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.5", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "214 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.5/vllm-0.8.5%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.8.4
  { v: "0.8.4", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "294 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.4/vllm-0.8.4-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.4", cuda: "12.1", py: "3.8+", os: "linux_x86_64", size: "203 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.4/vllm-0.8.4%2Bcu121-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.4", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "202 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.4/vllm-0.8.4%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.8.3
  { v: "0.8.3", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "294 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.3/vllm-0.8.3-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.3", cuda: "12.1", py: "3.8+", os: "linux_x86_64", size: "203 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.3/vllm-0.8.3%2Bcu121-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.3", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "202 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.3/vllm-0.8.3%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.8.2
  { v: "0.8.2", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "294 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.2/vllm-0.8.2-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.2", cuda: "12.1", py: "3.8+", os: "linux_x86_64", size: "297 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.2/vllm-0.8.2%2Bcu121-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.2", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "202 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.2/vllm-0.8.2%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.8.1
  { v: "0.8.1", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "265 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.1/vllm-0.8.1-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.1", cuda: "12.1", py: "3.8+", os: "linux_x86_64", size: "269 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.1/vllm-0.8.1%2Bcu121-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "202 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.1/vllm-0.8.1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.8.0
  { v: "0.8.0", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "265 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.0/vllm-0.8.0-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.0", cuda: "12.1", py: "3.8+", os: "linux_x86_64", size: "269 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.0/vllm-0.8.0%2Bcu121-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.8.0", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "202 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.8.0/vllm-0.8.0%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.7.3
  { v: "0.7.3", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "265 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.7.3/vllm-0.7.3-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.7.3", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "198 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.7.3/vllm-0.7.3%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.7.2
  { v: "0.7.2", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "264 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.7.2/vllm-0.7.2-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.7.2", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "198 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.7.2/vllm-0.7.2%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.7.1
  { v: "0.7.1", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "264 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.7.1/vllm-0.7.1-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.7.1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "197 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.7.1/vllm-0.7.1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.7.0
  { v: "0.7.0", cuda: "12.4", py: "3.8+", os: "linux_x86_64", size: "264 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.7.0/vllm-0.7.0-cp38-abi3-manylinux1_x86_64.whl" },
  { v: "0.7.0", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "197 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.7.0/vllm-0.7.0%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.6.6.post1
  { v: "0.6.6.post1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "199 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.6.post1/vllm-0.6.6.post1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.6.6
  { v: "0.6.6", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "199 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.6/vllm-0.6.6%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.6.5
  { v: "0.6.5", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "199 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.5/vllm-0.6.5%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.6.4.post1
  { v: "0.6.4.post1", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "198 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.4.post1/vllm-0.6.4.post1%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.6.4
  { v: "0.6.4", cuda: "11.8", py: "3.8+", os: "linux_x86_64", size: "198 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.4/vllm-0.6.4%2Bcu118-cp38-abi3-manylinux1_x86_64.whl" },

  // v0.6.1.post2 (per-Python wheels)
  { v: "0.6.1.post2", cuda: "11.8", py: "3.12", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post2/vllm-0.6.1.post2%2Bcu118-cp312-cp312-manylinux1_x86_64.whl" },
  { v: "0.6.1.post2", cuda: "11.8", py: "3.11", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post2/vllm-0.6.1.post2%2Bcu118-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.6.1.post2", cuda: "11.8", py: "3.10", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post2/vllm-0.6.1.post2%2Bcu118-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.6.1.post2", cuda: "11.8", py: "3.9", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post2/vllm-0.6.1.post2%2Bcu118-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.6.1.post2", cuda: "11.8", py: "3.8", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post2/vllm-0.6.1.post2%2Bcu118-cp38-cp38-manylinux1_x86_64.whl" },

  // v0.6.1.post1 (per-Python wheels)
  { v: "0.6.1.post1", cuda: "11.8", py: "3.12", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post1/vllm-0.6.1.post1%2Bcu118-cp312-cp312-manylinux1_x86_64.whl" },
  { v: "0.6.1.post1", cuda: "11.8", py: "3.11", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post1/vllm-0.6.1.post1%2Bcu118-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.6.1.post1", cuda: "11.8", py: "3.10", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post1/vllm-0.6.1.post1%2Bcu118-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.6.1.post1", cuda: "11.8", py: "3.9", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post1/vllm-0.6.1.post1%2Bcu118-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.6.1.post1", cuda: "11.8", py: "3.8", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1.post1/vllm-0.6.1.post1%2Bcu118-cp38-cp38-manylinux1_x86_64.whl" },

  // v0.6.1 (per-Python wheels)
  { v: "0.6.1", cuda: "11.8", py: "3.12", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1/vllm-0.6.1%2Bcu118-cp312-cp312-manylinux1_x86_64.whl" },
  { v: "0.6.1", cuda: "11.8", py: "3.11", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1/vllm-0.6.1%2Bcu118-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.6.1", cuda: "11.8", py: "3.10", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1/vllm-0.6.1%2Bcu118-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.6.1", cuda: "11.8", py: "3.9", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1/vllm-0.6.1%2Bcu118-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.6.1", cuda: "11.8", py: "3.8", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.1/vllm-0.6.1%2Bcu118-cp38-cp38-manylinux1_x86_64.whl" },

  // v0.6.0 (per-Python wheels)
  { v: "0.6.0", cuda: "11.8", py: "3.12", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.0/vllm-0.6.0%2Bcu118-cp312-cp312-manylinux1_x86_64.whl" },
  { v: "0.6.0", cuda: "11.8", py: "3.11", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.0/vllm-0.6.0%2Bcu118-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.6.0", cuda: "11.8", py: "3.10", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.0/vllm-0.6.0%2Bcu118-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.6.0", cuda: "11.8", py: "3.9", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.0/vllm-0.6.0%2Bcu118-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.6.0", cuda: "11.8", py: "3.8", os: "linux_x86_64", size: "170 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.6.0/vllm-0.6.0%2Bcu118-cp38-cp38-manylinux1_x86_64.whl" },

  // v0.5.5 (per-Python wheels)
  { v: "0.5.5", cuda: "11.8", py: "3.12", os: "linux_x86_64", size: "133 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.5/vllm-0.5.5%2Bcu118-cp312-cp312-manylinux1_x86_64.whl" },
  { v: "0.5.5", cuda: "11.8", py: "3.11", os: "linux_x86_64", size: "133 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.5/vllm-0.5.5%2Bcu118-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.5.5", cuda: "11.8", py: "3.10", os: "linux_x86_64", size: "133 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.5/vllm-0.5.5%2Bcu118-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.5.5", cuda: "11.8", py: "3.9", os: "linux_x86_64", size: "133 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.5/vllm-0.5.5%2Bcu118-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.5.5", cuda: "11.8", py: "3.8", os: "linux_x86_64", size: "133 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.5/vllm-0.5.5%2Bcu118-cp38-cp38-manylinux1_x86_64.whl" },

  // v0.5.4 (per-Python wheels, CUDA 11.8 and 12.1)
  { v: "0.5.4", cuda: "12.1", py: "3.12", os: "linux_x86_64", size: "124 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4-cp312-cp312-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "12.1", py: "3.11", os: "linux_x86_64", size: "124 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "12.1", py: "3.10", os: "linux_x86_64", size: "124 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "12.1", py: "3.9", os: "linux_x86_64", size: "124 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "12.1", py: "3.8", os: "linux_x86_64", size: "124 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4-cp38-cp38-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "11.8", py: "3.12", os: "linux_x86_64", size: "125 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4%2Bcu118-cp312-cp312-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "11.8", py: "3.11", os: "linux_x86_64", size: "125 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4%2Bcu118-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "11.8", py: "3.10", os: "linux_x86_64", size: "125 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4%2Bcu118-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "11.8", py: "3.9", os: "linux_x86_64", size: "125 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4%2Bcu118-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.5.4", cuda: "11.8", py: "3.8", os: "linux_x86_64", size: "125 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.4/vllm-0.5.4%2Bcu118-cp38-cp38-manylinux1_x86_64.whl" },

  // v0.5.3.post1 (per-Python wheels)
  { v: "0.5.3.post1", cuda: "12.1", py: "3.11", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3.post1/vllm-0.5.3.post1-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.5.3.post1", cuda: "12.1", py: "3.10", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3.post1/vllm-0.5.3.post1-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.5.3.post1", cuda: "12.1", py: "3.9", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3.post1/vllm-0.5.3.post1-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.5.3.post1", cuda: "12.1", py: "3.8", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3.post1/vllm-0.5.3.post1-cp38-cp38-manylinux1_x86_64.whl" },
  { v: "0.5.3.post1", cuda: "11.8", py: "3.11", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3.post1/vllm-0.5.3.post1%2Bcu118-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.5.3.post1", cuda: "11.8", py: "3.10", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3.post1/vllm-0.5.3.post1%2Bcu118-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.5.3.post1", cuda: "11.8", py: "3.9", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3.post1/vllm-0.5.3.post1%2Bcu118-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.5.3.post1", cuda: "11.8", py: "3.8", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3.post1/vllm-0.5.3.post1%2Bcu118-cp38-cp38-manylinux1_x86_64.whl" },

  // v0.5.3 (per-Python wheels)
  { v: "0.5.3", cuda: "12.1", py: "3.11", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3/vllm-0.5.3-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.5.3", cuda: "12.1", py: "3.10", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3/vllm-0.5.3-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.5.3", cuda: "12.1", py: "3.9", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3/vllm-0.5.3-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.5.3", cuda: "12.1", py: "3.8", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3/vllm-0.5.3-cp38-cp38-manylinux1_x86_64.whl" },
  { v: "0.5.3", cuda: "11.8", py: "3.11", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3/vllm-0.5.3%2Bcu118-cp311-cp311-manylinux1_x86_64.whl" },
  { v: "0.5.3", cuda: "11.8", py: "3.10", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3/vllm-0.5.3%2Bcu118-cp310-cp310-manylinux1_x86_64.whl" },
  { v: "0.5.3", cuda: "11.8", py: "3.9", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3/vllm-0.5.3%2Bcu118-cp39-cp39-manylinux1_x86_64.whl" },
  { v: "0.5.3", cuda: "11.8", py: "3.8", os: "linux_x86_64", size: "158 MB", url: "https://github.com/vllm-project/vllm/releases/download/v0.5.3/vllm-0.5.3%2Bcu118-cp38-cp38-manylinux1_x86_64.whl" },
];
