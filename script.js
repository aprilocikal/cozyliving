const products = [
    {
        id: 1,
        category: 'kursi',
        name: 'GrandSeater Lounge',
        brand: 'GrandSeater',
        price: 'Rp 2.902.220',
        image: 'assets/chair_grandseater_1773469259546.png',
        images: [
            'assets/chair_grandseater_1773469259546.png', 
            'assets/chair_grandseater_angle2_1773476035023.png', 
            'assets/chair_grandseater_1773469259546.png'
        ],
        description: 'Kursi lounge premium dengan bantal empuk dan rangka kokoh. Didesain secara ergonomis untuk memberikan kenyamanan maksimal setelah hari yang panjang.',
        rating: 4.8,
        stock: 12
    },
    {
        id: 2,
        category: 'lemari',
        name: 'CabinetPro Storage',
        brand: 'CabinetPro',
        price: 'Rp 1.681.940',
        image: 'assets/cabinet_cabinetpro_1773469275316.png',
        images: [
            'assets/cabinet_cabinetpro_1773469275316.png', 
            'assets/cabinet_cabinetpro_angle2_1773476050602.png', 
            'assets/cabinet_cabinetpro_1773469275316.png'
        ],
        description: 'Lemari penyimpanan minimalis dengan material kayu premium. Memiliki banyak kompartemen untuk merapikan barang-barang Anda dengan gaya.',
        rating: 4.7,
        stock: 5
    },
    {
        id: 3,
        category: 'meja',
        name: 'DeskPrime Workstation',
        brand: 'DeskPrime',
        price: 'Rp 1.140.990',
        image: 'assets/table_deskprime_1773469295215.png',
        images: [
            'assets/table_deskprime_1773469295215.png', 
            'assets/table_deskprime_angle2_1773476069864.png', 
            'assets/table_deskprime_1773469295215.png'
        ],
        description: 'Meja kerja modern dengan fitur kabel management. Luas dan kokoh, sangat cocok untuk mendukung produktivitas kerja Anda di rumah.',
        rating: 4.9,
        stock: 8
    },
    {
        id: 4,
        category: 'rak',
        name: 'TitanRack Modular',
        brand: 'TitanRack',
        price: 'Rp 2.803.970',
        image: 'assets/shelf_titanrack_1773469312791.png',
        images: [
            'assets/shelf_titanrack_1773469312791.png', 
            'assets/shelf_titanrack_angle2_1773476088610.png', 
            'assets/shelf_titanrack_1773469312791.png'
        ],
        description: 'Rak modular yang dapat disesuaikan dengan kebutuhan ruang Anda. Terbuat dari metal berdaya tahan tinggi dengan sentuhan akhir industrial.',
        rating: 4.6,
        stock: 15
    },
    {
        id: 5,
        category: 'sofa',
        name: 'GrandLuxe Sectional',
        brand: 'GrandLuxe',
        price: 'Rp 2.861.100',
        image: 'assets/sofa_grandluxe_1773469329405.png',
        images: [
            'assets/sofa_grandluxe_1773469329405.png', 
            'assets/sofa_grandluxe_angle2_1773476105227.png', 
            'assets/sofa_grandluxe_1773469329405.png'
        ],
        description: 'Sofa mewah dengan bahan velvet kualitas ekspor. Empuk dan lega, menjadikannya pusat perhatian yang sempurna untuk ruang tamu Anda.',
        rating: 4.8,
        stock: 3
    },
    {
        id: 6,
        category: 'tempat-tidur',
        name: 'SleepEZ King Bed',
        brand: 'SleepEZ',
        price: 'Rp 1.614.590',
        image: 'assets/bed_sleepez_1773469346855.png',
        images: [
            'assets/bed_sleepez_1773469346855.png', 
            'assets/bed_sleepez_angle2_new_v2_1773478154229.png', 
            'assets/bed_sleepez_1773469346855.png'
        ],
        description: 'Rangka tempat tidur berbahan kayu solid yang dirancang untuk stabilitas maksimal. Memberikan dukungan sempurna untuk tidur yang lebih nyenyak.',
        rating: 4.9,
        stock: 10
    },
    {
        id: 7,
        category: 'kursi',
        name: 'Nordic Accent Chair',
        brand: 'GrandSeater',
        price: 'Rp 4.250.000',
        image: 'assets/chair_luxe_1773471881677.png',
        images: [
            'assets/chair_luxe_1773471881677.png', 
            'assets/chair_nordic_angle2_1773477226019.png', 
            'assets/chair_luxe_1773471881677.png'
        ],
        description: 'Kursi aksen dengan desain Nordic yang elegan. Material kulit sintetis premium dengan kaki kayu solid yang kokoh.',
        rating: 5.0,
        stock: 7
    },
    {
        id: 8,
        category: 'meja',
        name: 'Marble Dining Table',
        brand: 'DeskPrime',
        price: 'Rp 6.800.000',
        image: 'assets/table_marble_1773471897546.png',
        images: ['assets/table_marble_1773471897546.png', 'assets/table_marble_1773471897546.png', 'assets/table_marble_1773471897546.png'],
        description: 'Meja makan mewah dengan permukaan marmer asli. Desain bundar yang memberikan kesan hangat dan akrab saat berkumpul.',
        rating: 4.9,
        stock: 2
    },
    {
        id: 9,
        category: 'sofa',
        name: 'Royal Velvet Sofa',
        brand: 'GrandLuxe',
        price: 'Rp 12.500.000',
        image: 'assets/sofa_velvet_1773471916422.png',
        images: ['assets/sofa_velvet_1773471916422.png', 'assets/sofa_velvet_1773471916422.png', 'assets/sofa_velvet_1773471916422.png'],
        description: 'Sofa velvet berwarna biru royal yang memberikan kesan sangat mewah. Sangat empuk dan nyaman untuk bersantai.',
        rating: 4.8,
        stock: 4
    },
    {
        id: 10,
        category: 'lainnya',
        name: 'Modern Gold Chandelier',
        brand: 'CozyLights',
        price: 'Rp 1.140.990',
        image: 'assets/lamp_pendant_1773471934872.png',
        images: ['assets/lamp_pendant_1773471934872.png', 'assets/lamp_pendant_1773471934872.png', 'assets/lamp_pendant_1773471934872.png'],
        description: 'Lampu gantung modern dengan aksen emas. Memberikan pencahayaan yang dramatis dan hangat di ruang makan Anda.',
        rating: 4.7,
        stock: 9
    },
    {
        id: 11,
        category: 'tempat-tidur',
        name: 'Classic Platform Bed',
        brand: 'SleepEZ',
        price: 'Rp 7.500.000',
        image: 'assets/bed_master_1773471947329.png',
        images: ['assets/bed_master_1773471947329.png', 'assets/bed_master_1773471947329.png', 'assets/bed_master_1773471947329.png'],
        description: 'Tempat tidur dengan headboard empuk dan desain minimalis. Memberikan kesan bersih dan tenang di kamar tidur Anda.',
        rating: 4.9,
        stock: 6
    },
    {
        id: 12,
        category: 'rak',
        name: 'Floating Wall Shelf',
        brand: 'TitanRack',
        price: 'Rp 1.850.000',
        image: 'assets/shelf_wall_1773471962449.png',
        images: ['assets/shelf_wall_1773471962449.png', 'assets/shelf_wall_1773471962449.png', 'assets/shelf_wall_1773471962449.png'],
        description: 'Rak dinding kayu melayang yang sangat minimalis. Cocok untuk menaruh koleksi buku atau tanaman hias kecil.',
        rating: 4.5,
        stock: 20
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    // 0. Preloader Logic
    const preloader = document.getElementById('preloader');
    const glitterContainer = document.getElementById('glitterContainer');

    // Create Glitter Particles
    function createGlitter() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'glitter-particle';
            
            // Random positions
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 3 + 1;
            
            // Random delay
            const delay = Math.random() * 2;
            
            particle.style.top = `${top}%`;
            particle.style.left = `${left}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDelay = `${delay}s`;
            
            glitterContainer.appendChild(particle);
        }
    }

    createGlitter();

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'auto';
        }, 1500); // Tampilkan animasi minimal 1.5 detik agar terlihat premium
    });

    // Prevent scrolling when loading
    document.body.style.overflow = 'hidden';

    // 1. Initialize Hero background
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundImage = `url('assets/hero_furniture_1773469366766.png')`;

    // 2. Navbar & Mobile Menu Components
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // 3. Cart Components
    const cartToggle = document.getElementById('cartToggle');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCountElement = document.querySelector('.cart-count');
    const cartTotalAmount = document.getElementById('cartTotalAmount');
    
    // 4. Checkout Components
    const openCheckoutBtn = document.getElementById('openCheckout');
    const checkoutModal = document.getElementById('checkoutModal');
    const productDetailModal = document.getElementById('productDetailModal');
    const closeDetail = document.getElementById('closeDetail');
    const closeDetailBtn = document.getElementById('closeDetailBtn');
    const closeModal = document.getElementById('closeModal');
    const checkoutForm = document.getElementById('checkoutForm');
    const orderSummary = document.getElementById('orderSummary');

    // --- NAVIGATION EVENTS ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const mobileMenu = document.getElementById('navMobileMenu');
    const closeMobileBtn = document.getElementById('closeMobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMobileBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // --- CART EVENTS ---
    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.style.display = 'block';
    });

    const hideCart = () => {
        cartSidebar.classList.remove('active');
        cartOverlay.style.display = 'none';
    };

    closeCart.addEventListener('click', hideCart);
    cartOverlay.addEventListener('click', hideCart);

    // --- CHECKOUT EVENTS ---
    openCheckoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Keranjang Kosong',
                text: 'Silakan pilih produk terlebih dahulu.',
                confirmButtonColor: '#86d9f7'
            });
            return;
        }
        renderOrderSummary();
        checkoutModal.style.display = 'flex';
        hideCart();
    });

    closeModal.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    closeDetail.addEventListener('click', () => {
        productDetailModal.style.display = 'none';
    });

    closeDetailBtn.addEventListener('click', () => {
        productDetailModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === productDetailModal) productDetailModal.style.display = 'none';
        if (e.target === checkoutModal) checkoutModal.style.display = 'none';
    });

    // Initialize EmailJS (Optional: using a placeholder for demo)
    // emailjs.init("YOUR_PUBLIC_KEY");

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !phone || !address) {
            Swal.fire({
                icon: 'error',
                title: 'Data Tidak Lengkap',
                text: 'Harap isi semua kolom termasuk nomor WhatsApp.',
                confirmButtonColor: '#ff4d4d',
                customClass: { confirmButton: 'custom-swal-button' }
            });
            return;
        }

        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Email Tidak Valid',
                text: 'Gunakan format email yang benar (contoh: user@gmail.com)',
                confirmButtonColor: '#ff4d4d',
                customClass: { confirmButton: 'custom-swal-button' }
            });
            return;
        }

        // AMBIL DATA SEBELUM DIHAPUS
        const finalTotal = document.getElementById('cartTotalAmount').innerText;
        const itemsToPrint = [...cart]; // Copy isi keranjang sebentar

        Swal.fire({
            title: 'Memproses Pesanan...',
            text: 'Mempersiapkan struk digital WhatsApp Anda',
            allowOutsideClick: false,
            didOpen: () => { 
                Swal.showLoading();
                // Sembunyikan modal segera
                checkoutModal.style.display = 'none';
                // Kosongkan keranjang asli
                cart = [];
                updateCartUI();
            }
        });

        setTimeout(() => {
            // Fill Receipt Data menggunakan data yang sudah disimpan tadi (finalTotal & itemsToPrint)
            const now = new Date();
            const timeStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' + 
                          now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            const trxId = 'TRX-' + now.getTime().toString().slice(-10);
            
            document.getElementById('receiptId').innerText = trxId;
            document.getElementById('receiptTime').innerText = timeStr;
            document.getElementById('receiptName').innerText = name;
            document.getElementById('receiptTotal').innerText = finalTotal;
            
            const receiptItems = document.getElementById('receiptItems');
            receiptItems.innerHTML = itemsToPrint.map(item => `
                <div class="receipt-item-row">
                    <span class="item-name">${item.name} (${item.quantity}x)</span>
                    <span class="item-price">${item.price}</span>
                </div>
            `).join('');

            // Generate Image using html2canvas
            const target = document.querySelector('.shopee-receipt');
            const receiptTemplate = document.getElementById('receiptTemplate');
            receiptTemplate.style.left = '0'; // Show temporarily for capture
            receiptTemplate.style.top = '0';

            html2canvas(target).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                receiptTemplate.style.left = '-9999px'; // Hide again

                // Format WhatsApp Message
                let formattedPhone = phone;
                if (formattedPhone.startsWith('0')) formattedPhone = '62' + formattedPhone.slice(1);
                else if (!formattedPhone.startsWith('62')) formattedPhone = '62' + formattedPhone;

                const waMessage = `*STRUK PESANAN COZYLIVING*\n\nHalo ${name}!\nStruk belanja Anda sudah siap. \n\nID: ${trxId}\nTotal: ${finalTotal}\n\nTerima kasih!`;
                const waLink = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(waMessage)}`;

                Swal.fire({
                    title: 'Pesanan Berhasil!',
                    html: `
                        <p style="font-size: 14px; color: #666; margin-bottom: 10px;"><b>Langkah kirim struk ke WA:</b></p>
                        <ol style="font-size: 13px; text-align: left; color: #555; margin-bottom: 15px;">
                            <li>Klik <b>Simpan Struk</b> di bawah</li>
                            <li>Klik <b>Kirim ke WhatsApp</b></li>
                            <li>Lalu <b>Lampirkan/Paste</b> foto struk tadi di chat</li>
                        </ol>
                        <img src="${imgData}" class="receipt-preview">
                        <br>
                        <a href="${imgData}" download="Struk-CozyLiving-${trxId}.png" class="swal2-confirm swal2-styled custom-swal-button" style="text-decoration:none; display:inline-block; background-color:#86d9f7; color:white; margin-top:10px;">
                            <i class="fas fa-download"></i> Simpan Struk (Foto)
                        </a>
                    `,
                    showCancelButton: true,
                    confirmButtonText: '<i class="fab fa-whatsapp"></i> Kirim ke WhatsApp',
                    cancelButtonText: 'Tutup',
                    confirmButtonColor: '#25D366',
                    cancelButtonColor: '#ff4d4d',
                    customClass: { 
                        confirmButton: 'custom-swal-button', 
                        cancelButton: 'custom-swal-button' 
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.open(waLink, '_blank');
                    }
                    checkoutForm.reset();
                });
            });
        }, 1500);
    });

    // --- CORE LOGIC ---
    function renderProducts(filter = 'all') {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);

        filteredProducts.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animationDelay = `${index * 0.1}s`;
            card.onclick = (e) => {
                if (!e.target.closest('.add-btn')) {
                    openProductDetail(product.id);
                }
            };
            
            card.innerHTML = `
                <div class="img-container">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category.replace('-', ' ')}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-brand">
                        <i class="far fa-copyright"></i> ${product.brand}
                    </div>
                    <div class="product-footer">
                        <span class="product-price">${product.price}</span>
                        <div class="add-btn" onclick="addToCart(${product.id})">
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
            setTimeout(() => card.classList.add('show'), 50);
        });
    }

    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartUI();
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });

        Toast.fire({
            icon: 'success',
            title: `${product.name} telah ditambahkan`,
            background: '#ffffff',
            color: '#1A1A1A',
            iconColor: '#D4AF37'
        });
    };

    window.updateQuantity = (productId, change) => {
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.id !== productId);
            }
            updateCartUI();
        }
    };

    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ''));
            total += price * item.quantity;
            count += item.quantity;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price}</p>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <i class="fas fa-trash remove-item" onclick="updateQuantity(${item.id}, -${item.quantity})"></i>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartCountElement.innerText = count;
        cartTotalAmount.innerText = `Rp ${total.toLocaleString('id-ID')}`;
    }

    function renderOrderSummary() {
        orderSummary.innerHTML = '<h3>Item Pesanan:</h3>';
        let total = 0;
        cart.forEach(item => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ''));
            total += price * item.quantity;
            const div = document.createElement('div');
            div.className = 'summary-item';
            div.innerHTML = `
                <span>${item.name} (x${item.quantity})</span>
                <span>${item.price}</span>
            `;
            orderSummary.appendChild(div);
        });
        const totalDiv = document.createElement('div');
        totalDiv.className = 'summary-item';
        totalDiv.style.fontWeight = 'bold';
        totalDiv.style.borderTop = '1px solid #ddd';
        totalDiv.style.marginTop = '10px';
        totalDiv.style.paddingTop = '10px';
        totalDiv.innerHTML = `
            <span>Total Bayar</span>
            <span>Rp ${total.toLocaleString('id-ID')}</span>
        `;
        orderSummary.appendChild(totalDiv);
    }

    let currentGalleryImages = [];
    let currentImgIndex = 0;

    window.openProductDetail = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        currentGalleryImages = product.images;
        currentImgIndex = 0;

        // Fill data
        document.getElementById('detailMainImg').src = product.image;
        document.getElementById('detailTitle').innerText = product.name;
        document.getElementById('detailPrice').innerText = product.price;
        document.getElementById('detailDesc').innerText = product.description;
        document.getElementById('detailRatingNum').innerText = product.rating;

        // Stars
        const starsContainer = document.getElementById('detailStars');
        starsContainer.innerHTML = '';
        const fullStars = Math.floor(product.rating);
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            star.className = i < fullStars ? 'fas fa-star' : 'far fa-star';
            starsContainer.appendChild(star);
        }

        // Gallery Thumbs
        const thumbGrid = document.getElementById('detailThumbs');
        thumbGrid.innerHTML = product.images.map((img, idx) => `
            <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeDetailImg(this, '${img}')">
                <img src="${img}" alt="Thumb">
            </div>
        `).join('');

        // Action Buttons
        document.getElementById('detailAddToCart').onclick = () => {
            addToCart(product.id);
        };

        document.getElementById('detailBuyNow').onclick = () => {
            productDetailModal.style.display = 'none';
            addToCart(product.id);
            document.getElementById('openCheckout').click();
        };

        productDetailModal.style.display = 'flex';
    };

    window.changeDetailImg = (el, src, index) => {
        document.getElementById('detailMainImg').src = src;
        currentImgIndex = index;
        document.querySelectorAll('.thumb-item').forEach(item => item.classList.remove('active'));
        if(el) el.classList.add('active');
        else {
            const thumbs = document.querySelectorAll('.thumb-item');
            if(thumbs[index]) thumbs[index].classList.add('active');
        }
    };

    const navigateGallery = (direction) => {
        currentImgIndex += direction;
        if (currentImgIndex < 0) currentImgIndex = currentGalleryImages.length - 1;
        if (currentImgIndex >= currentGalleryImages.length) currentImgIndex = 0;
        
        const newSrc = currentGalleryImages[currentImgIndex];
        changeDetailImg(null, newSrc, currentImgIndex);
    };

    document.getElementById('prevImg').onclick = () => navigateGallery(-1);
    document.getElementById('nextImg').onclick = () => navigateGallery(1);

    // Mobile Swipe Logic
    let touchStartX = 0;
    const mainImgContainer = document.querySelector('.main-img-container');
    
    mainImgContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    mainImgContainer.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) navigateGallery(1); // Swipe Left -> Next
        if (touchEndX > touchStartX + 50) navigateGallery(-1); // Swipe Right -> Prev
    });

    // Initialize
    renderProducts();

    // Filtering System
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.getAttribute('data-filter'));
        });
    });
});
