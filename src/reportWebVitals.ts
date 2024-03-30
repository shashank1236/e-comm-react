import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals';

onCLS(console.log);
onFID(console.log);
onLCP(console.log);
onFCP(console.log);
onINP(console.log);
onTTFB(console.log);
