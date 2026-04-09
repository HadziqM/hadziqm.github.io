+++
title = "Ship Maintenance & Monitoring System"
description = " Design system for monitor ship fuel consumption and its engine health for adaptive maintenance"
date = 2024-01-01
authors = ["Hadziq Masfuh"]

[taxonomies]
tech = ["MODBUS", "Rust", "Linux", "Sensor", "HMI(Web)"]
domain = ["Embedded", "System Engineering", "Industrial IoT"]
+++
## Ship Maintenance & Monitoring System

### Description
Developed and implemented a ship maintenance and monitoring system designed to track operational parameters and improve maintenance efficiency on a ferry ship.

The system collects real-time data from multiple sensors, including fuel flow, engine RPM, exhaust temperature, and GPS location. A **NodeMCU-based local system** handles initial data acquisition and validation over a Wi-Fi network before synchronizing with a public server.

The platform is designed with a **local-first architecture**, ensuring continued operation even without internet connectivity. Processed data is then transmitted to a **VPS for remote monitoring and control**, making the system accessible online.

---

### Responsibilities
- Selected and integrated hardware sensors:
  - Fuel flow sensor
  - Hall effect sensor for RPM (installed on ship panel)
  - Exhaust temperature sensor (via microcontroller)
  - GPS module
- Developed local data acquisition system using NodeMCU
- Implemented initial data validation and preprocessing on-device
- Designed communication between local system and remote server
- Configured VPS for public data access and control
- Deployed and tested system on an operational ferry (Java–Bali route)

---

### Features
- Real-time monitoring of ship operational parameters
- Local-first system (works without constant internet)
- On-device data validation and preprocessing
- Remote monitoring and control via VPS
- GPS tracking integration
- Scalable architecture for additional sensors

---


### Technologies

- **Microcontroller:** NodeMCU (ESP8266)
- **Protocol:** MODBUS (Serial Communication), TCP (ESP using channel)
- **Gateway / Edge Controller:** Linux-based Mini PC
- **Programming:**
  - Embedded C / Arduino (sensor layer)
  - Rust (data processing, communication, system control)
- **Networking:**
  - Wi-Fi (local communication)
  - VPN + VPS (public access and remote control)
- **Architecture:**
  - Local-first data processing (on microcontroller & mini PC)
  - Edge-to-server synchronization
  - failure detection and recovery (signal lost or power lost)
  - Data processing and visualization
  - on demand calibration using remote control
  - Distributed monitoring system (device → gateway → cloud)

---

### Hardware
- Fuel flow sensor (MODBUS)
- Hall effect sensor (RPM)
- Exhaust temperature sensor
- GPS module
- NodeMCU (ESP8266)

---

### Focus Area
- IoT systems
- Embedded systems
- Real-time monitoring
- Industrial data acquisition
- Edge computing (local-first processing)

---

![control panel sensor](/images/fuel_monitor_panel_make.jpg)

*Figure: Control Panel on the process*

![testing system](/images/testing_system.jpg)

*Figure: Control Panel on the process*

![installed panel](/images/monitoring_panel_engine_room.jpg)

*Figure: Installed Control Panel on engine room*
