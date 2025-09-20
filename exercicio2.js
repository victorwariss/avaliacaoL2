const horasPorProfessor = `
SELECT 
  P.ID AS professor_id,
  P.NAME AS professor_name,
  SUM(EXTRACT(EPOCH FROM (CS.END_TIME - CS.START_TIME))/3600) AS horas_total
FROM PROFESSOR P
JOIN SUBJECT S ON S.TAUGHT_BY = P.ID
JOIN CLASS C ON C.SUBJECT_ID = S.ID
JOIN CLASS_SCHEDULE CS ON CS.CLASS_ID = C.ID
GROUP BY P.ID, P.NAME;
`;

const horariosPorSala = `
SELECT 
  R.ID AS sala_id,
  R.NAME AS sala_nome,
  CS.DAY_OF_WEEK,
  CS.START_TIME,
  CS.END_TIME
FROM ROOM R
LEFT JOIN CLASS_SCHEDULE CS ON CS.ROOM_ID = R.ID
ORDER BY R.ID, CS.DAY_OF_WEEK, CS.START_TIME;
`;

module.exports = {
  horasPorProfessor,
  horariosPorSala,
};
