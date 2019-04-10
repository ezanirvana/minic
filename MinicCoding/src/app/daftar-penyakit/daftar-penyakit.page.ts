import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daftar-penyakit',
  templateUrl: './daftar-penyakit.page.html',
  styleUrls: ['./daftar-penyakit.page.scss'],
})
export class DaftarPenyakitPage implements OnInit {
  private selectedItem: any;
  public icons = [
    'Panu',
    'Kurap',
    'Kadas',
    'Bisul',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
  }

  ngOnInit() {
  }

}
