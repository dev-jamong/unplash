export const recomposeData = (data) => {
  const result = [[], [], []];
  const groupHeight = [0, 0, 0];

  for (let i = 0; data.length > i; i++) {
    // groupHeight 배열을 까서 가장 최소 숫자 = minHeight로 담아
    const minHeight = Math.min(...groupHeight);

    // groupHeight의 배열안에 숫자중에 최소height의 인덱스 값이 뭔지 indexOf로 찾아줘
    const minHeightIndex = groupHeight.indexOf(minHeight);

    // reset라는 결과를 도출할 배열안에서 최소 height를 가진놈에게 data를 더해줘
    result[minHeightIndex].push(data[i]);

    // 원본 이미지의 height들은 더 크니까 공통적이게 width / width하면 1이야. width / height하면 1에 기준한 높이값 비율이 나오지
    const retioHeight = data[i].width / data[i].height;

    // eslint-disable-next-line operator-assignment
    groupHeight[minHeightIndex] = groupHeight[minHeightIndex] + retioHeight;
  }
  return result;

  /* 자바스크립트는 싱글 스레드라서 무조건 차례대로 실행해! 아닐때는 중간에 비동기가 있을때,
  비동기는 webAPI로 빠질떄, 그땐 차례대로 값이 실행되는걸 보장할수없어. */
};
