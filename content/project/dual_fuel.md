+++
title = "Dual Fuel Generator System Project"
description = "Control and monitoring Fuel balance (Diesel & Gas) and efficency of the machine"
date = 2025-12-23
authors = ["Hadziq Masfuh"]

[taxonomies]
tech = ["MODBUS", "Linux", "Sensor","HMI(Web)","Rust"]
domain = ["Embeded", "System Engineer", "Industrial IoT" ]
+++


## Dual Fuel Generator System Project (Diesel & Gas)

### Description
Participated in the development of a dual fuel system (diesel and gas) for generators, aimed at improving fuel efficiency and operational performance. 

I was part of the **Measurement and Monitoring Team**, focusing on building a reliable communication and monitoring system for real-time operational data.

The system utilizes the **MODBUS protocol** to integrate multiple devices, including the generator, gas sensors, and fuel flow sensors. The monitoring platform runs on a **Linux (Nix-based) system**, ensuring flexibility, reproducibility, and ease of deployment.

---

### Responsibilities
- Developed MODBUS-based communication system (serial)
- Integrated data from:
  - Generator
  - Gas sensors
  - Fuel flow sensors
- Designed and configured sensor components
- Set up and configured a Linux-based mini PC
- Built monitoring system for real-time data acquisition
- Developed web-based interface for system visualization
- Deployed system online via reverse proxy:
  - Local server → VPN → VPS → Public access
- Conducted testing and validation of measurement data

---

### Features
- Real-time monitoring of generator performance
- Integrated multi-sensor data acquisition
- Remote access via web interface
- Secure online exposure using VPN + reverse proxy
- Modular and scalable system design

---

### Technologies
- **Protocol:** MODBUS (Serial Communication)
- **Programming Language:** Rust
- **Operating System:** Linux (Nix-based system)
- **Backend/System:** Embedded + Mini PC
- **Frontend:** Web-based monitoring interface
- **Networking:**
  - VPN tunneling
  - Reverse proxy (local to VPS)

---

### Hardware
- Generator
- Gas sensor
- Fuel flow sensor
- Mini PC (Linux-based controller)

---

### Focus Area
- Monitoring systems
- Industrial data acquisition
- Embedded + distributed systems
- System integration

---
![Generator](/fuel_flow_sensor_generator.jpg)

*Figure: Installed Fuel Flow Sensor on Generator*

![Gas Control](/gas_pid_control.jpg)

*Figure: Configure Gas Input PID*

![Web-HMI](/web_hmi.jpg)

*Figure: Web Based HMI on the control room*

