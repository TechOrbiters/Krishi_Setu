# KrishiSetu — AI-Powered Agricultural Commerce & Freshness-Aware Logistics

## Project Overview

KrishiSetu is an AI-powered agricultural commerce and logistics platform designed to connect farmers/FPOs, buyers, and transporters through a single integrated digital ecosystem.

Instead of solving only the problem of selling agricultural produce, KrishiSetu coordinates the complete journey from farm to buyer:

**Demand Discovery → Farmer Listing → Intelligent Buyer Matching → Order → Transport Matching → Freshness-Aware Routing → Live Delivery → Transparent Settlement**

The platform is designed around four core RBAC roles:

* **FARMER_FPO** — manages produce, listings, orders, and agricultural operations.
* **BUYER** — discovers produce, receives intelligent recommendations, and places orders.
* **TRANSPORTER** — manages vehicles, accepts transport jobs, tracks deliveries, and manages earnings.
* **ADMIN** — monitors the complete ecosystem, users, transactions, logistics, and platform operations.

---

## Problem

Agricultural supply chains are often fragmented across farmers, intermediaries, buyers, and transportation providers.

This creates several problems:

* Farmers have limited visibility into demand and potential buyers.
* Buyers struggle to find suitable produce reliably.
* Transportation is often arranged separately from the transaction.
* Perishable produce can lose value because of inefficient logistics.
* Farmers and transporters may have limited transparency about financial settlements.
* Supply, demand, transportation, and freshness are usually treated as separate problems.

KrishiSetu addresses these problems by connecting them into one coordinated workflow.

---

## Our Solution

KrishiSetu creates an integrated agricultural supply-chain network where intelligent decision-making is applied at every major stage.

### 1. Demand Intelligence

The platform analyzes market and demand information to help farmers understand what produce is likely to have demand.

### 2. Smart Matching

KrishiSetu intelligently connects suitable farmers and buyers based on factors such as:

* Produce
* Quantity
* Price
* Quality/grade
* Location
* Buyer requirements
* Reliability

### 3. Integrated Ordering

Once a buyer places an order, the system maintains the order lifecycle and connects it with the corresponding logistics workflow.

### 4. Smart Transport Matching

The transporter network evaluates suitable transport options based on factors such as:

* Distance
* Vehicle capacity
* Availability
* Fare
* Transporter rating
* Freshness constraints

### 5. Freshness-Aware Logistics

For perishable produce, transportation is not treated simply as a distance problem.

KrishiSetu considers whether the produce can reach the destination within its freshness/time constraint.

### 6. Live Delivery Tracking

Transporters can manage trips and delivery progress while the relevant stakeholders can monitor the logistics lifecycle.

### 7. Transparent Settlement

The platform maintains transparent financial distribution between the relevant participants.

For example:

**Product Value → Farmer**

**Delivery Fee → Transporter**

The platform does not artificially hide the value distribution from participants.

---

## Core AI/Intelligence Modules

KrishiSetu contains multiple intelligence-driven modules designed around real agricultural workflows.

### DemandSense

Helps identify demand patterns and support farmer decision-making.

### SmartMatch

Ranks compatible buyer/produce opportunities using multiple matching factors.

### SellSmart

Helps farmers make more informed selling decisions.

### SmartTransport

Ranks suitable transportation options based on operational and logistical factors.

### FreshRoute

Considers freshness constraints while planning transportation.

### Krishi AI Assistant

Provides an intelligent conversational interface for users.

The AI features are designed with explainability and fallback behaviour rather than presenting unexplained recommendations.

---

## Complete End-to-End Workflow

The complete KrishiSetu workflow is:

**Farmer/FPO**

→ Creates produce listing

→ Receives demand intelligence

→ Gets intelligent buyer opportunities

↓

**Buyer**

→ Discovers suitable produce

→ Reviews recommendation

→ Places order

↓

**KrishiSetu**

→ Validates order

→ Creates logistics requirement

→ Finds suitable transport options

↓

**Transporter**

→ Receives transport opportunity

→ Reviews vehicle/capacity/fare/route

→ Accepts transport job

→ Picks up produce

→ Starts trip

→ Provides live delivery progress

↓

**FreshRoute**

→ Monitors route/freshness constraints

↓

**Delivery**

→ Produce reaches buyer

→ Delivery is completed

↓

**Settlement**

→ Farmer/product value is settled

→ Transporter receives delivery fee

→ Transaction lifecycle is completed

---

## What Makes KrishiSetu Different

KrishiSetu is not simply an agricultural marketplace and it is not simply a logistics application.

Its core innovation is the integration of:

**Agricultural Commerce + AI Decision Support + Transport Intelligence + Freshness-Aware Logistics + Transparent Settlement**

The system treats the agricultural supply chain as one connected ecosystem.

---

## Technical Architecture

The platform is built as a modern full-stack application with:

* Next.js
* TypeScript
* Firebase Authentication
* Supabase/PostgreSQL
* API-driven backend architecture
* Role-based authorization
* AI services
* Maps/routing integrations
* Weather/information integrations
* Voice interaction capabilities
* Multilingual user experience
* Automated testing
* End-to-end workflow validation

Security-sensitive decisions are enforced on the server rather than relying only on frontend UI restrictions.

---

## RBAC Architecture

KrishiSetu uses four primary roles:

### FARMER_FPO

Responsible for:

* Produce management
* Produce listings
* Orders
* Buyer interactions
* Agricultural information
* Selling workflow

### BUYER

Responsible for:

* Marketplace discovery
* Produce search
* Smart matching
* Ordering
* Order tracking
* Purchase workflow

### TRANSPORTER

Responsible for:

* Vehicle management
* Transport opportunities
* Job acceptance
* Trip management
* Route tracking
* Delivery completion
* Earnings

### ADMIN

Responsible for:

* Platform monitoring
* User management
* Operational oversight
* Logistics monitoring
* Transaction oversight
* System administration

Each role has clearly defined permissions and workflows.

---

## Impact

KrishiSetu aims to reduce fragmentation across the agricultural supply chain by connecting the major participants through one coordinated platform.

The expected impact includes:

* Better demand visibility for farmers
* More direct access to buyers
* Better utilization of transportation capacity
* Reduced logistical inefficiency
* Improved freshness management for perishable produce
* Transparent transaction flows
* Better coordination between commerce and logistics

---

## Demonstration Scenario

Our demonstration follows one complete real-world scenario:

**Farmer lists 500 kg of produce**

↓

KrishiSetu analyzes demand

↓

A suitable buyer is identified

↓

Buyer places an order

↓

A transport requirement is automatically generated

↓

SmartTransport identifies suitable transport options

↓

Transporter accepts the job

↓

FreshRoute evaluates the delivery route and freshness constraint

↓

Transporter completes pickup and delivery

↓

The order is completed

↓

The settlement is transparently recorded

This demonstrates how KrishiSetu connects the entire agricultural journey rather than demonstrating isolated features.

---

## Why This Matters

A farmer should not have to separately solve:

**Who will buy my produce?**

**What price should I target?**

**How will the produce reach the buyer?**

**Which transporter should I choose?**

**Will the produce reach the buyer while it is still fresh?**

KrishiSetu brings these decisions together into one intelligent platform.

### Our vision

**From Farm → To Market → To Transport → To Buyer — one connected ecosystem.**

---

## Submission Note

KrishiSetu is submitted as a complete working product with an integrated frontend, backend, authentication, RBAC, database, AI-assisted workflows, marketplace functionality, transporter operations, logistics workflows, and end-to-end agricultural supply-chain coordination.

The repository contains the implementation, documentation, testing infrastructure, and project evolution required to evaluate the technical and product aspects of the solution.
