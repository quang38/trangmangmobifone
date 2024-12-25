document.addEventListener('DOMContentLoaded', () => {
    const defaultImage = '../image/defaultImage/noImage.png';  // Đặt hình ảnh mặc định nếu không có ảnh
    const projectListContainer = document.getElementById('project-list');  // Chọn phần tử nơi hiển thị các gói

    // Fetch data từ project.json
    fetch('./data.json')
        .then(response => response.json())
        .then(projects => {
            if (Array.isArray(projects)) {  // Kiểm tra xem dữ liệu có phải là mảng không
                projects.forEach(project => {
                    const projectCard = document.createElement('div');  // Tạo thẻ div cho mỗi gói
                    projectCard.className = 'project-card';  // Áp dụng class cho thẻ

                    const projectContent = document.createElement('div');  // Tạo div chứa thông tin gói
                    projectContent.className = 'project-content';  // Áp dụng class cho phần nội dung

                    const projectTitle = document.createElement('h3');  // Tiêu đề gói
                    projectTitle.textContent = project.name;  // Gán tên gói

                    const projectUudai = document.createElement('p');  // Ưu đãi
                    projectUudai.textContent = `Ưu đãi: ${project.uudai}`;

                    const projectGia = document.createElement('p');  // Giá gói
                    projectGia.textContent = `Giá: ${project.gia}`;

                    const projectTinhtrang = document.createElement('p');  // Tình trạng gói
                    projectTinhtrang.textContent = `Tình trạng: ${project.tinhtrang}`;

                    const projectLoaigoi = document.createElement('p');  // Loại gói
                    projectLoaigoi.textContent = `Loại gói: ${project.loaigoi}`;

                    // Thêm các thông tin vào nội dung thẻ
                    projectContent.appendChild(projectTitle);
                    projectContent.appendChild(projectUudai);
                    projectContent.appendChild(projectGia);
                    projectContent.appendChild(projectTinhtrang);
                    projectContent.appendChild(projectLoaigoi);

                    projectCard.appendChild(projectContent);  // Thêm nội dung vào thẻ card

                    projectListContainer.appendChild(projectCard);  // Thêm card vào danh sách các gói mạng
                });
            } else {
                projectListContainer.innerHTML = '<p>Không tìm thấy gói mạng nào.</p>';  // Nếu không có dữ liệu
            }
        })
        .catch(error => {
            console.error('Lỗi khi tải dữ liệu:', error);
            projectListContainer.innerHTML = '<p>Không thể tải dữ liệu.</p>';  // Nếu có lỗi trong quá trình fetch dữ liệu
        });
});
