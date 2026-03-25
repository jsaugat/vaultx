# A Promise chain continues in the “fulfilled lane” unless a rejection or throw puts it back in the “rejected lane”.

### Quick “memory trick”:

- Microtasks = promises / continuations / immediately next
- Macrotasks = timers / events / external triggers / later

- Microtask = logical “what happens next”
- Macrotask = physical “something happened, now handle it”