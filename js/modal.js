renderStudent = (stuList) => {
  let contentHTML = ``;
  stuList.forEach((item) => {
    let content = `<tr
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
    <td class="px-6 py-4">${item.address}</td>
    <td
      scope="row"
      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
    >
      ${item.id}
    </td>
    <td class="px-6 py-4">${item.email}</td>
    <td class="px-6 py-4">${item.toan}</td>
    <td class="px-6 py-4">${item.ly}</td>
    <td class="px-6 py-4">${item.hoa}</td>
    <td class="px-6 py-4">
      <a
        type="button"
        data-modal-target="editUserModal"
        data-modal-show="editUserModal"
        class="font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
        onclick="editUser(${item.id}, 'Student')"
        >Edit user</a
      >
    </td>
  </tr>`;
    contentHTML += content;
  });
  document.getElementById("tbody").innerHTML = contentHTML;
};
renderEmployee = (EmpList) => {
  let contentHTML = ``;
  EmpList.forEach((item) => {
    console.log(item);
    let content = `<tr
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
    <td class="px-6 py-4">${item.address}</td>
    <td
      scope="row"
      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
    >
      ${item.id}
    </td>
    <td class="px-6 py-4">${item.email}</td>
    <td class="px-6 py-4">${item.WorkingDay}</td>
    <td class="px-6 py-4">${item.DaySalary}</td>
    <td class="px-6 py-4">
      <a
        type="button"
        data-modal-target="editUserModal"
        data-modal-show="editUserModal"
        class="font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
        onclick="editUser(${item.id}, 'Employee')"
        >Edit user</a
      >
    </td>
  </tr>`;
    contentHTML += content;
  });
  document.getElementById("tbody").innerHTML = contentHTML;
};
renderCustomer = (CusLis) => {
  let contentHTML = ``;
  CusLis.forEach((item) => {
    let content = `<tr
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
    <td class="px-6 py-4">${item.address}</td>
    <td
      scope="row"
      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
    >
      ${item.id}
    </td>
    <td class="px-6 py-4">${item.email}</td>
    <td class="px-6 py-4">${item.TenCty}</td>
    <td class="px-6 py-4">${item.hoaDon}</td>
    <td class="px-6 py-4">${item.danhGia}</td>
    <td class="px-6 py-4">
      <a
        
        type="button"
        data-modal-target="editUserModal"
      data-modal-show="editUserModal"
        class="font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
        onclick="editUser(${item.id}, 'Customer')"
        >Edit user</a
      >
    </td>
  </tr>`;
    contentHTML += content;
  });
  document.getElementById("tbody").innerHTML = contentHTML;
};
renderClear = () => {
  document.getElementById("tbody").innerHTML = "";
};
