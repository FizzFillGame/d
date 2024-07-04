 const apps = [
  { name: 'Steam', description: 'แพลตฟอร์มยอดนิยมสำหรับซื้อและดาวน์โหลดเกม', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', link: 'https://store.steampowered.com/' },
    { name: 'Discord', description: 'แอปสื่อสารด้วยเสียงและข้อความสำหรับชุมชนเกมเมอร์', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS3cchdQUqPBx42eifXeBC4OLfCDsFD0w-ljhmPSOrJ772oA2Acjrlx97iLlg08JsnvO-ZtyBWQ5XvUNUptGJaxf0v8CryfkIYBQ3-wpRruWnkDSIU662LK66ao3CW9dOkf46Jdw3Uajv8Ojca47j12voiA5uqbtUlXj8ssXuDClZUIcqixXvif3xJoeA/s1600/discord.png', link: 'https://discord.com/' },
    { name: 'OBS Studio', description: 'ซอฟต์แวร์ฟรีสำหรับการบันทึกและสตรีมวิดีโอ', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM6_jmFXWXh25X5hVRh2pdLvpbeMNtztSaefnmbCikEESgG1xGniDT4-Hp93J5J69JC7kx9vjO5MafOwPd7rGaUdiE97wgvg-EJKPz88tFM5genDContR6IQVIjaoa8meJlE6DfB0cud2xM8fKz5MHye7xPLiE3_ql9flSpVyXjYy1OZ1be6AihKAaA24/s1600/obs.png', link: 'https://obsproject.com/' },
    { name: 'NVIDIA GeForce Experience', description: 'ซอฟต์แวร์ปรับแต่งประสิทธิภาพการ์ดจอ NVIDIA', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_BJACOgiLmyyeTK8Q5tizq0bPFqp-Fbgy4nHe7jTZSUujUdTtTYQ_uhHQ-1eHkq4Ny2XPUZh17JIlXTXpt5ftw8lF6cjZk6543y0DZNi2oDINKXN1KxVY84qjTSRzdOtkwv3IS0s2j4wW5DpRq2NyTsBVIm0EoHR3Ts0FSPgK3XSUHeg4nR3Tjo0guvU/s1600/GeForce.png', link: 'https://www.nvidia.com/en-us/geforce/geforce-experience/' },
    { name: 'MSI Afterburner', description: 'เครื่องมือโอเวอร์คล็อกการ์ดจอจาก MSI', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiDcXynPAwgSsp_kuhp7WzQilb7KAkwepmSd2eNJTSyyr1AJ4v-iHKtXxYpKGpbZS2cv1ocXbYR4bCDaRNvm5RK0SowaCvvVabbClC5MinAwOJXjuAs1hDfSsKqrvVVBao6HC1wMWYKxCbKTAOfejeEhABDatf7j6es4olac7_vg7o6PY6Dl5_b3Cs0BY/s1600/afterburner.png', link: 'https://www.msi.com/page/afterburner' },
    { name: 'CPU-Z', description: 'โปรแกรมแสดงข้อมูลรายละเอียดเกี่ยวกับฮาร์ดแวร์ของคอมพิวเตอร์', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7bYEbh8ZMGWrZ-MzkkrruJk5SXRcEtzZeUBhq2svPxQH8RdDUTIBvWGuWqWGjkrO_5s_f7nh70jT2xzMuP5FXlXYF_r-hZeDaWbZ9TXmRY0bpZW0Yzh30IhQgL_UxDmSkS_mQA6VNY0UgfdVeUjQwfxsTPOipwy5ISR5TPgEz7k3774NVGjmvwRtTWDg/s1600/CPU-Z.png', link: 'https://www.cpuid.com/softwares/cpu-z.html' },
    { name: 'HWMonitor', description: 'โปรแกรมตรวจสอบอุณหภูมิ ความเร็วพัดลม และการใช้พลังงานของระบบ', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEI8Fnpcc8KuVRmb7hjWuKMwkcbasRRUkEiS3XMKWoUmzxeSuIg434HSWxl2I-sPCrmvyi4XMLcYQvGWO3E9ebuYhddztCaph4lPITjcWOAeKDiu3Rrwkm6Vm1E12gwMeH3axOHoXDorkKCWXZ9F77_3goFbTjSdLRLdWQ3VaY1-5komj-z7bjSxr948k/s1600/HWMonitor.png', link: 'https://www.cpuid.com/softwares/hwmonitor.html' },
{ name: 'TeamSpeak', description: 'แอปสื่อสารด้วยเสียงสำหรับการเล่นเกม', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHN5KBy-gkOkB8-bY5NjJBJkyLoDbp6LmVJB7XWAPA8PMSpc7gytjvx89__wR73aa_kjZYVv8F3fscIznRTSEp89DIOljvDPI_iZOccPfwXglJ1BZ_z_yf3ib4FUdg_Gn5f5m1blablDx-Z-1mHmGfLN0ZJYQoNsMRocrfjhtliVWjd5H3hZ3C02BQgQ4/s1600/teamspeak.png', link: 'https://teamspeak.com/' },    
{ name: 'Battle.net', description: 'แพลตฟอร์มเกมออนไลน์จาก Blizzard', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYAQupZZbFM5Vb5V6qQRPEfY6oa4rgEXK8-idEG0NzFid0dgK3NM2oi7CuoeKYcmD1J67W4sHP_ijp-vRa7XBXXydH6DsiZ6AnXV_FYUcy-veym8pDowEpA80OZTQTNKEOgSXrptd-lR6xkbEmEOdf4KWYdMly9l_9br-WXtGYMq6kyQ66JRdocaWAiF4/s1600/battle.png', link: 'https://www.blizzard.com/en-us/apps/battle.net/desktop' },
    { name: 'Epic Games', description: 'แพลตฟอร์มซื้อและดาวน์โหลดเกมจาก Epic Games', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg', link: 'https://www.epicgames.com/store/en-US/download' },
    { name: 'LDPlayer', description: 'โปรแกรมจําลอง Android เล่นเกมมือถือในคอม', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUkjfkXJcWXZ5eUUV0M0YLgYWxafVSG1aA4RIEdboWMeWNFLRhPzn-DKPfDQQt0ZNpIQocUq8PLgxs5QN_fw7Y9Bcai9hy-JS7QwbLDmqkn43YnluGcBzVj2a6cXIlV_swlvjsw_kFUJyKwXzxHiABsgBYr7QpC2A55nV40U52txTimDBOrdFLqwnqfzY/s1600/LDPlayer.png', link: 'https://th.ldplayer.net/' },
      { name: 'BlueStacks', description: 'โปรแกรมจําลอง Android เล่นเกมมือถือในคอม', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8crga_N4lAdifl-S6gxuD3cQoLzPJhsaB5MYEpwZn_h-8a47ulMj7Z0msIsPsJCmZrax7l7-3QqCyYm7VXPXvMsmW8Swm1ow3b06LrLBN_zNochSG5OlCQoCO_DFmjC554aDvhgzfIplD9K_pc3xAA6Mq_5TJzMwRHdwNVgicismpO3USnSm602AGQys/s1600/BlueStacks.png', link: 'https://www.bluestacks.com/th/index.html' },
    { name: 'GameLoop', description: 'โปรแกรมจําลอง Android เล่นเกมมือถือในคอม', status: 'Download', icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipS_8K5ru-7LnKtuw14HJ7-KipEYLejedkfR-geEe7TBPZVGAwK2FsCQnJpCdX_gRIbHT5VPW5J4pKYZv8ZM8g2N_i52ZLmvxwnTTHZhs_LUKNJsjLv_Yx9crqZy_lU8WFKKnnuNRICIzWOYavt8eBNBh_XuPIAJtHLW2OG7RACT76Za0epqNY3PVM5KY/s1600/GameLoop.png', link: 'https://www.gameloop.com/th' },
        ];

        const appList = document.getElementById('appList');

        apps.forEach(app => {
            const appItem = document.createElement('div');
            appItem.classList.add('app-item-new');

            const icon = document.createElement('img');
            icon.src = app.icon;

            const appInfo = document.createElement('div');
            appInfo.classList.add('app-info-new');

            const appName = document.createElement('div');
            appName.classList.add('app-name-new');
            const name = document.createElement('span');
            name.textContent = app.name;
            appName.appendChild(icon);
            appName.appendChild(name);

            const description = document.createElement('div');
            description.classList.add('app-description-new');
            description.textContent = app.description;

            appInfo.appendChild(appName);
            appInfo.appendChild(description);

            const status = document.createElement('div');
            status.classList.add('status-new');

            const dot = document.createElement('span');
            dot.classList.add('dot-new', app.status === 'Updated' ? 'updated-new' : 'update-available-new');

            const statusText = document.createElement('span');
            statusText.textContent = app.status;

            const downloadButton = document.createElement('a');
            downloadButton.classList.add('update-button-new');
            downloadButton.textContent = 'Download';
            downloadButton.href = app.link;
            downloadButton.target = '_blank'; // Open link in new tab

            status.appendChild(dot);
            status.appendChild(statusText);
            status.appendChild(downloadButton);

            appItem.appendChild(appInfo);
            appItem.appendChild(status);

            appList.appendChild(appItem);
        });
