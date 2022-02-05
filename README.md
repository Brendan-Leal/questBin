# Request Bin Clone

## This app was developed by
- [Michael Fatigati](https://github.com/MFatigati)
- [Samantha Lipari](https://github.com/samlipari)
- [Drew Sessler](https://github.com/dsessler7)
- [Brendan Leal](https://github.com/Brendan-Leal)

---
## About The App
This app was created during the Launch School Capstone program during our exploration of webhooks, microservices, and event driven architectures.

Webhooks are commonplace around the internet. In brief, they allow you to send data to a specific URL about events that may occur. If you find yourself developing your own webhook (meaning you’re the webhook provider) you’ll need a place to test if your implementation is working. This handy app can generate a bunch of unique URLs (webhook consumers) to send your requests to and allow you to inspect their contents.

Getting familiar with webhooks informed a broader context that underpins microservices and event driven architectures. Within a microservice architecture you’ll have many services that need to communicate with one another. One way this communication can happen is by having each service make their request to the other through API calls. This has various implications that impact the performance of the system. For example, if a particular service has to wait a while for the other service to respond due to an unreliable network. This can be alleviated by applying the concepts behind an event driven architecture. By introducing message queues, services no longer directly communicate with each other. All they have to do is let the message queue know that something happened (an event occurred) and when the next service is ready they can pick up the remaining work.

By building this small app we gained valuable context for how these systems work and the trade offs to be aware of when dealing with a microservice architecture.