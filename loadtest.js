import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '40s', target: 1000 }, // simulate ramp-up of traffic from 1 to 1000 users over 40 seconds.
    { duration: '1m', target: 1000 }, // stay at 1000 users for 1 minute
    { duration: '20s', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<800'], // 99% of requests should be less than 800ms
  },
};

export default function () {
  const res = http.get('https://eisso.online');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}

//o bjetivo de escalar é manter o nível de qualidade das repostas a medida que aumenta a carga 