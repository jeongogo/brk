import React from 'react';

const CustomerContainer = () => {
  return (
    <div className="customer">
      <table>
        <tbody>
          <tr>
            <th>이름</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>이메일</th>
            <td className="flex">
              <input type="text" /> @ <input type="text" />
              <select>
                <option value="">메일선택</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>핸드폰 번호</th>
            <td className="flex">
              <select>
                <option value="010">010</option>
              </select>
              - <input type="text" />
              - <input type="text" />
            </td>
          </tr>
          <tr>
            <th>제목</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>문의 내용</th>
            <td>
              <select>
                <option value="">선택</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerContainer;
