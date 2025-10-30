// Disease database - mapping diseases to body parts and information
const diseaseDatabase = {
    // Head related
    'đau đầu': {
        parts: ['head'],
        info: 'Đau đầu là cảm giác khó chịu ở vùng đầu, có thể do căng thẳng, thiếu ngủ, hoặc các bệnh lý khác.',
        keywords: ['dau dau', 'dau đầu', 'nhuc dau', 'đau nửa đầu', 'migraine', 'bệnh đầu']
    },
    'đau nửa đầu': {
        parts: ['head'],
        info: 'Đau nửa đầu (migraine) là loại đau đầu thường xảy ra một bên đầu, có thể kèm theo buồn nôn và nhạy cảm với ánh sáng.',
        keywords: ['migraine', 'dau nua dau', 'đau nửa đầu']
    },

    // Neck related
    'đau cổ': {
        parts: ['neck'],
        info: 'Đau cổ có thể do tư thế ngồi sai, căng cơ, hoặc chấn thương.',
        keywords: ['dau co', 'đau cổ', 'cứng cổ', 'dau gay']
    },

    // Chest/Heart related
    'đau tim': {
        parts: ['heart', 'chest'],
        info: 'Đau tim là triệu chứng nghiêm trọng, có thể là dấu hiệu của nhồi máu cơ tim. Cần đến bệnh viện ngay lập tức.',
        keywords: ['dau tim', 'đau tim', 'nhoi mau co tim', 'đau ngực', 'benh tim']
    },
    'đau ngực': {
        parts: ['chest'],
        info: 'Đau ngực có thể do nhiều nguyên nhân: tim mạch, phổi, cơ, hoặc lo âu.',
        keywords: ['dau nguc', 'đau ngực', 'kho tho', 'thắt ngực']
    },

    // Lung related
    'viêm phổi': {
        parts: ['leftLung', 'rightLung', 'chest'],
        info: 'Viêm phổi là nhiễm trùng gây viêm các túi khí trong phổi, có thể do vi khuẩn, virus hoặc nấm.',
        keywords: ['viem phoi', 'viêm phổi', 'benh phoi', 'ho', 'kho tho']
    },
    'hen suyễn': {
        parts: ['leftLung', 'rightLung', 'chest'],
        info: 'Hen suyễn là bệnh viêm mãn tính đường hô hấp, gây khó thở, thở khò khè.',
        keywords: ['hen suyen', 'hen suyễn', 'kho tho', 'suyen', 'benh hen']
    },

    // Stomach related
    'đau dạ dày': {
        parts: ['stomach', 'abdomen'],
        info: 'Đau dạ dày có thể do viêm loét dạ dày, ăn uống không hợp lý, hoặc căng thẳng.',
        keywords: ['dau da day', 'đau dạ dày', 'viem da day', 'loet da day', 'dau bung']
    },
    'viêm dạ dày': {
        parts: ['stomach', 'abdomen'],
        info: 'Viêm dạ dày là tình trạng viêm niêm mạc dạ dày, gây đau bụng, buồn nôn.',
        keywords: ['viem da day', 'viêm dạ dày', 'dau da day']
    },

    // Liver related
    'đau gan': {
        parts: ['liver', 'abdomen'],
        info: 'Đau gan có thể do viêm gan, gan nhiễm mỡ, hoặc các bệnh lý gan khác.',
        keywords: ['dau gan', 'đau gan', 'viem gan', 'benh gan', 'gan nhiem mo']
    },
    'viêm gan': {
        parts: ['liver', 'abdomen'],
        info: 'Viêm gan là tình trạng viêm tế bào gan, có thể do virus (A, B, C), rượu, hoặc các nguyên nhân khác.',
        keywords: ['viem gan', 'viêm gan', 'gan b', 'gan c', 'benh gan']
    },

    // Kidney related
    'đau thận': {
        parts: ['leftKidney', 'rightKidney', 'abdomen'],
        info: 'Đau thận có thể do sỏi thận, nhiễm trùng thận, hoặc các bệnh lý thận khác.',
        keywords: ['dau than', 'đau thận', 'soi than', 'viem than', 'benh than']
    },
    'sỏi thận': {
        parts: ['leftKidney', 'rightKidney', 'abdomen'],
        info: 'Sỏi thận là tình trạng hình thành các tinh thể cứng trong thận, gây đau dữ dội.',
        keywords: ['soi than', 'sỏi thận', 'dau than']
    },

    // Intestines related
    'đau bụng': {
        parts: ['abdomen', 'intestines'],
        info: 'Đau bụng có thể do nhiều nguyên nhân: tiêu hóa, ruột thừa, kinh nguyệt, hoặc các bệnh lý khác.',
        keywords: ['dau bung', 'đau bụng', 'dau da day', 'dau ruot']
    },
    'viêm ruột thừa': {
        parts: ['abdomen', 'intestines'],
        info: 'Viêm ruột thừa là tình trạng cấp cứu, cần phẫu thuật nếu không được điều trị kịp thời.',
        keywords: ['viem ruot thua', 'viêm ruột thừa', 'dau ruot', 'ruot thua']
    },
    'táo bón': {
        parts: ['intestines', 'abdomen'],
        info: 'Táo bón là tình trạng khó đi tiêu hoặc đi tiêu không thường xuyên.',
        keywords: ['tao bon', 'táo bón', 'kho tieu', 'dau bung']
    },

    // Shoulder related
    'đau vai': {
        parts: ['leftShoulder', 'rightShoulder'],
        info: 'Đau vai có thể do tư thế làm việc sai, chấn thương, hoặc viêm khớp.',
        keywords: ['dau vai', 'đau vai', 'viem khop vai', 'dau co vai gay']
    },

    // Arm related
    'đau tay': {
        parts: ['leftUpperArm', 'rightUpperArm', 'leftForearm', 'rightForearm'],
        info: 'Đau tay có thể do chấn thương, thoái hóa khớp, hoặc hội chứng ống cổ tay.',
        keywords: ['dau tay', 'đau tay', 'te tay', 'dau canh tay']
    },
    'viêm khớp tay': {
        parts: ['leftHand', 'rightHand', 'leftForearm', 'rightForearm'],
        info: 'Viêm khớp tay gây đau, sưng và cứng các khớp ở bàn tay và ngón tay.',
        keywords: ['viem khop tay', 'viêm khớp tay', 'dau khop', 'dau ban tay']
    },

    // Leg related
    'đau chân': {
        parts: ['leftThigh', 'rightThigh', 'leftCalf', 'rightCalf'],
        info: 'Đau chân có thể do vận động nhiều, chấn thương, hoặc vấn đề tuần hoàn.',
        keywords: ['dau chan', 'đau chân', 'chuot rut', 'dau bap chan']
    },
    'đau khớp gối': {
        parts: ['leftThigh', 'rightThigh', 'leftCalf', 'rightCalf'],
        info: 'Đau khớp gối có thể do chấn thương, viêm khớp, hoặc thoái hóa khớp.',
        keywords: ['dau khop goi', 'đau khớp gối', 'dau goi', 'viem khop goi']
    },

    // Foot related
    'đau bàn chân': {
        parts: ['leftFoot', 'rightFoot'],
        info: 'Đau bàn chân có thể do đi bộ nhiều, giày không phù hợp, hoặc viêm cân gan bàn chân.',
        keywords: ['dau ban chan', 'đau bàn chân', 'dau gan chan', 'dau long ban chan']
    },

    // General body
    'đau toàn thân': {
        parts: ['head', 'neck', 'chest', 'abdomen', 'leftShoulder', 'rightShoulder',
                'leftUpperArm', 'rightUpperArm', 'leftThigh', 'rightThigh'],
        info: 'Đau toàn thân có thể do cảm cúm, nhiễm trùng, hoặc các bệnh tự miễn.',
        keywords: ['dau toan than', 'đau toàn thân', 'dau ca nguoi', 'met moi']
    },
    'cảm cúm': {
        parts: ['head', 'neck', 'chest', 'leftLung', 'rightLung'],
        info: 'Cảm cúm là bệnh nhiễm trùng đường hô hấp do virus gây ra, với triệu chứng sốt, ho, đau đầu.',
        keywords: ['cam cum', 'cảm cúm', 'cum', 'sot', 'ho', 'chay mui']
    },

    // Spine/Back
    'đau lưng': {
        parts: ['chest', 'abdomen'],
        info: 'Đau lưng là vấn đề phổ biến, có thể do tư thế xấu, chấn thương, hoặc thoát vị đĩa đệm.',
        keywords: ['dau lung', 'đau lưng', 'dau cot song', 'dau that lung']
    },
    'thoát vị đĩa đệm': {
        parts: ['chest', 'abdomen'],
        info: 'Thoát vị đĩa đệm xảy ra khi phần đệm giữa các đốt sống bị thoát ra, gây đau và tê.',
        keywords: ['thoat vi dia dem', 'thoát vị đĩa đệm', 'dau lung', 'dau cot song']
    }
};

// Current state
let currentMode = 'normal';
let highlightedParts = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    showLayer('normal');
    updateDiseaseInfo('Nhập tên bệnh để xem thông tin và vị trí đau trên cơ thể.');
});

// Setup event listeners
function setupEventListeners() {
    // Search button
    document.getElementById('searchBtn').addEventListener('click', searchDisease);

    // Enter key in search box
    document.getElementById('diseaseInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchDisease();
        }
    });

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', clearHighlights);

    // Mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const mode = this.dataset.mode;
            switchMode(mode);
        });
    });

    // Body parts hover effect - show part name
    document.querySelectorAll('.body-part, .organ, .transparent-organ').forEach(part => {
        part.addEventListener('mouseenter', function() {
            const partName = this.dataset.part || this.id;
            showPartInfo(partName);
        });
    });
}

// Search for disease
function searchDisease() {
    const input = document.getElementById('diseaseInput').value.toLowerCase().trim();

    if (!input) {
        updateDiseaseInfo('Vui lòng nhập tên bệnh.', 'warning');
        return;
    }

    // Clear previous highlights
    clearHighlights();

    // Find matching disease
    let found = false;
    for (const [diseaseName, diseaseData] of Object.entries(diseaseDatabase)) {
        // Check if input matches disease name or keywords
        const matches = diseaseData.keywords.some(keyword =>
            input.includes(keyword) || keyword.includes(input)
        );

        if (matches || diseaseName.includes(input) || input.includes(diseaseName)) {
            found = true;
            highlightParts(diseaseData.parts);
            updateDiseaseInfo(`
                <div class="fade-in">
                    <h4 style="color: #667eea; margin-bottom: 10px;">${capitalizeFirstLetter(diseaseName)}</h4>
                    <p style="margin-bottom: 15px;">${diseaseData.info}</p>
                    <p style="color: #f44336; font-weight: bold;">⚠️ Các vùng màu đỏ trên cơ thể biểu thị vị trí đau/ảnh hưởng</p>
                </div>
            `);
            break;
        }
    }

    if (!found) {
        updateDiseaseInfo(`
            <div class="fade-in">
                <p style="color: #f44336;">❌ Không tìm thấy thông tin về bệnh "<strong>${input}</strong>"</p>
                <p style="margin-top: 10px; color: #666;">Một số gợi ý bệnh phổ biến:</p>
                <ul class="disease-list" style="margin-top: 10px;">
                    <li><strong>Đau đầu</strong> - Các vấn đề về đầu</li>
                    <li><strong>Đau tim</strong> - Vấn đề tim mạch</li>
                    <li><strong>Đau dạ dày</strong> - Vấn đề tiêu hóa</li>
                    <li><strong>Viêm phổi</strong> - Vấn đề hô hấp</li>
                    <li><strong>Đau lưng</strong> - Vấn đề cột sống</li>
                    <li><strong>Đau khớp</strong> - Vấn đề khớp xương</li>
                </ul>
            </div>
        `);
    }
}

// Highlight body parts
function highlightParts(parts) {
    parts.forEach(partId => {
        // Try to find in all layers
        const elements = document.querySelectorAll(`#${partId}, [data-part="${partId}"]`);
        elements.forEach(element => {
            element.classList.add('highlighted');
            highlightedParts.push(element);
        });
    });
}

// Clear all highlights
function clearHighlights() {
    highlightedParts.forEach(element => {
        element.classList.remove('highlighted');
    });
    highlightedParts = [];
    document.getElementById('diseaseInput').value = '';
    updateDiseaseInfo('Nhập tên bệnh để xem thông tin và vị trí đau trên cơ thể.');
}

// Switch between body view modes
function switchMode(mode) {
    currentMode = mode;

    // Update active button
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

    // Show appropriate layer
    showLayer(mode);

    // Maintain highlights if any
    const currentHighlights = highlightedParts.map(el => ({
        id: el.id,
        dataPart: el.dataset.part
    }));

    highlightedParts.forEach(el => el.classList.remove('highlighted'));
    highlightedParts = [];

    // Reapply highlights to new layer
    setTimeout(() => {
        currentHighlights.forEach(highlight => {
            const elements = document.querySelectorAll(
                `#${highlight.id}, [data-part="${highlight.dataPart}"]`
            );
            elements.forEach(element => {
                if (isElementVisible(element)) {
                    element.classList.add('highlighted');
                    highlightedParts.push(element);
                }
            });
        });
    }, 100);
}

// Show specific body layer
function showLayer(mode) {
    // Hide all layers
    document.querySelectorAll('.body-layer').forEach(layer => {
        layer.classList.remove('active');
    });

    // Show selected layer
    const layerMap = {
        'normal': 'normalLayer',
        'skeleton': 'skeletonLayer',
        'muscle': 'muscleLayer',
        'vascular': 'vascularLayer',
        'transparent': 'transparentLayer'
    };

    const layerId = layerMap[mode];
    const layer = document.getElementById(layerId);
    if (layer) {
        layer.classList.add('active');
    }
}

// Check if element is visible
function isElementVisible(element) {
    const parent = element.closest('.body-layer');
    return parent && parent.classList.contains('active');
}

// Update disease information display
function updateDiseaseInfo(info, type = 'info') {
    const detailsDiv = document.getElementById('diseaseDetails');
    detailsDiv.innerHTML = info;
    detailsDiv.classList.remove('empty');

    if (info.includes('Nhập tên bệnh')) {
        detailsDiv.classList.add('empty');
    }
}

// Show part information on hover
function showPartInfo(partName) {
    const partNameMap = {
        'head': 'Đầu',
        'neck': 'Cổ',
        'chest': 'Ngực',
        'abdomen': 'Bụng',
        'shoulder': 'Vai',
        'arm': 'Cánh tay',
        'forearm': 'Cẳng tay',
        'hand': 'Bàn tay',
        'thigh': 'Đùi',
        'calf': 'Bắp chân',
        'foot': 'Bàn chân',
        'heart': 'Tim',
        'lung': 'Phổi',
        'liver': 'Gan',
        'stomach': 'Dạ dày',
        'kidney': 'Thận',
        'intestines': 'Ruột'
    };

    const displayName = partNameMap[partName] || partName;
    // Could add tooltip functionality here
}

// Utility function
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Auto-complete suggestions (optional enhancement)
function setupAutoComplete() {
    const input = document.getElementById('diseaseInput');
    const diseases = Object.keys(diseaseDatabase);

    input.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value.length < 2) return;

        // Find matching diseases
        const matches = diseases.filter(disease =>
            disease.includes(value) ||
            diseaseDatabase[disease].keywords.some(k => k.includes(value))
        );

        // Could display suggestions here
    });
}

// Initialize auto-complete
setupAutoComplete();
