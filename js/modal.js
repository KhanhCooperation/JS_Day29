renderStudent = () => {
  let contentHTML = "";
  arrStudent.forEach((item) => {
    content = `<tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th
      scope="row"
      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
    >
      <div class="">
        <div class="text-base font-semibold">${item.ten}</div>
      </div>
    </th>
    {/* <!-- //!Địa chỉ  --> */}
    <td class="px-6 py-4">${item.address}</td>
    {/* <!-- //!Mã  --> */}
    <td
      scope="row"
      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
    >
      SE1234
    </td>
    {/* <!-- //!gmail  --> */}
    <td class="px-6 py-4">React Developer@gmail.com</td>
    {/* <!-- //!Toán  --> */}
    <td class="px-6 py-4">9</td>
    {/* <!-- //!Lý  --> */}
    <td class="px-6 py-4">9</td>
    {/* <!-- //!Hóa  --> */}
    <td class="px-6 py-4">9</td>
    {/* <!-- //!Khác  --> */}
    <td class="px-6 py-4">
      Modal toggle
      <a
        href="#"
        type="button"
        data-modal-target="editUserModal"
        data-modal-show="editUserModal"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Edit user</a
      >
    </td>
  </tr>`;
  });
};
