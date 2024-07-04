 const apps = [
  { name: 'Steam', description: 'แพลตฟอร์มยอดนิยมสำหรับซื้อและดาวน์โหลดเกม', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', link: 'https://store.steampowered.com/' },
    { name: 'Discord', description: 'แอปสื่อสารด้วยเสียงและข้อความสำหรับชุมชนเกมเมอร์', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Discord_logo.svg', link: 'https://discord.com/' },
    { name: 'OBS Studio', description: 'ซอฟต์แวร์ฟรีสำหรับการบันทึกและสตรีมวิดีโอ', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/39/OBS_Studio_Logo.png', link: 'https://obsproject.com/' },
    { name: 'NVIDIA GeForce Experience', description: 'ซอฟต์แวร์ปรับแต่งประสิทธิภาพการ์ดจอ NVIDIA', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Nvidia_geforce_experience.png', link: 'https://www.nvidia.com/en-us/geforce/geforce-experience/' },
    { name: 'MSI Afterburner', description: 'เครื่องมือโอเวอร์คล็อกการ์ดจอจาก MSI', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/0/0c/MSI_Afterburner_logo.png', link: 'https://www.msi.com/page/afterburner' },
    { name: 'Razer Synapse', description: 'ซอฟต์แวร์ปรับแต่งอุปกรณ์เล่นเกม Razer', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Razer_Synapse_3.png', link: 'https://www.razer.com/synapse-3' },
    { name: 'Fraps', description: 'ซอฟต์แวร์บันทึกวิดีโอและวัดผลการทำงานของเกม', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Fraps_Logo.png', link: 'http://www.fraps.com/' },
{ name: 'TeamSpeak', description: 'แอปสื่อสารด้วยเสียงสำหรับการเล่นเกม', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/f/f2/TeamSpeak_Logo.png', link: 'https://teamspeak.com/' },    
{ name: 'Battle.net', description: 'แพลตฟอร์มเกมออนไลน์จาก Blizzard', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Battle.net_Desktop_Icon_2018.png', link: 'https://www.blizzard.com/en-us/apps/battle.net/desktop' },
    { name: 'Epic Games Launcher', description: 'แพลตฟอร์มซื้อและดาวน์โหลดเกมจาก Epic Games', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg', link: 'https://www.epicgames.com/store/en-US/download' },
    { name: 'GOG Galaxy', description: 'ไคลเอนต์เกมที่รวมเกมจากหลายแพลตฟอร์ม', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/GOG.com_Logo_2020.png', link: 'https://www.gog.com/galaxy' },
    { name: 'Origin', description: 'แพลตฟอร์มเกมจาก EA', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Origin_Logo.png', link: 'https://www.origin.com/' },
    { name: 'Uplay', description: 'แพลตฟอร์มเกมจาก Ubisoft', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Uplay_logo.png', link: 'https://uplay.ubisoft.com/' },
    
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
