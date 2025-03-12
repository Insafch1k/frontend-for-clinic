import { Component, OnInit } from '@angular/core';
import { AnalyzesService } from '../analyzes.service';
import { IAnalysisDesc, ICheckUp } from '../analyzes.interface';

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss'],
})
export class AnalyzesComponent implements OnInit {
  analyzDesc: IAnalysisDesc[] = [
    {
      name: 'КЛИНИКА-03 предлагает более',
      description: '2000 видов',
      answer: 'различных лабораторных исследований',
      listName: 'Наиболее востребованные у пациентов услуги:',
      listServ: [
        'общеклинический анализ крови и мочи',
        'биохимия',
        'тесты на гормоны',
        'аллергопробы',
        'определение резус-фактора и др.',
      ],
    },
    {
      name: 'Доставка результатов исследований:',
      description: 'по электронной почте по WhatsApp',
      listName: 'Преимущества нашей клиники:',
      listServ: [
        'одни из самых низких цен на анализы по городу;',
        'осуществляем забор анализов как у детей, так и у взрослых;',
        'анализы проводятся быстро;',
        'сотрудничаем с одними из лучших лабораторий города',
      ],
    },
  ];

  checkUpList: ICheckUp[] = [];
  isOpenCheckUp: boolean[] = [];

  constructor(private analyzesService: AnalyzesService) {}

  ngOnInit() {
    this.analyzesService.getAnalyses().subscribe(
        (data) => {
            this.checkUpList = data.map(item => {
                const totalSum = item.analyses.reduce((sum, analysis) => sum + analysis.price, 0);
                const discountedSum = totalSum * 0.85;
                const roundedDiscounted = Math.ceil(discountedSum / 10) * 10; // Округляем до ближайших десятков в большую сторону

                return {
                    name: item.name,
                    description: item.description,
                    complex: item.description, // Используем описание как комплекс
                    analyses: item.analyses, // Сохраняем исходные анализы
                    listAnal: item.analyses, // Используем анализы для отображения
                    sum: totalSum,
                    discounted: roundedDiscounted
                };
            });
            this.isOpenCheckUp = new Array(this.checkUpList.length).fill(false);
        },
        (error) => {
            console.error('Ошибка при получении данных анализов', error);
        }
    );
}




  openBlock(index: number) {
    this.isOpenCheckUp[index] = !this.isOpenCheckUp[index];
  }
  downloadPriceListFromAssets(): void {
    const fileName = 'Прайс на анализы Клиника-03.pdf'; // Замените на имя вашего файла
    const filePath = `assets/data/pdfs/${fileName}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
}
