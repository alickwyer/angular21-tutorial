import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe, CurrencyPipe, CommonModule } from '@angular/common';

export interface TransactionElement {
  id: number;
  category: string;
  amount: number;
  note?: string;
  accountId?: number;
  accountName: string;
  date: Date;
}

const ELEMENT_DATA: TransactionElement[] = [
  {
    id: 1,
    category: '转入',
    amount: 4930.23,
    accountName: 'X银行卡',
    date: new Date('2025-11-01'),
  },
  { id: 2, category: '转入', amount: 36000.0, accountName: 'Z理财*', date: new Date('2025-11-01') },
  {
    id: 3,
    category: '转入',
    amount: 2184.83,
    accountName: 'W零钱通',
    date: new Date('2025-11-01'),
  },
  {
    id: 4,
    category: '转入',
    amount: 2877.33,
    accountName: 'Z余额宝',
    date: new Date('2025-11-01'),
  },

  {
    id: 5,
    category: '房贷',
    amount: -2238.9,
    accountName: 'X银行卡',
    date: new Date('2025-11-19'),
  },
  {
    id: 6,
    category: '房租',
    amount: -2130.0,
    accountName: 'X银行卡',
    date: new Date('2025-11-30'),
  },

  {
    id: 7,
    category: '饮食',
    amount: -21.0,
    accountName: 'X信用卡',
    date: new Date('2025-11-17'),
    note: '小卖部零食',
  },
  {
    id: 8,
    category: '饮食',
    amount: -100.0,
    accountName: 'W零钱通',
    date: new Date('2025-11-18'),
    note: '八百里秦味充值',
  },
  {
    id: 9,
    category: '饮食',
    amount: -79.8,
    accountName: 'X信用卡',
    date: new Date('2025-11-18'),
    note: '盒马鲜生',
  },
  {
    id: 10,
    category: '饮食',
    amount: -56.9,
    accountName: 'W零钱通',
    date: new Date('2025-11-20'),
    note: '网购苹果',
  },
  {
    id: 11,
    category: '饮食',
    amount: -100.0,
    accountName: 'X银行卡',
    date: new Date('2025-11-20'),
    note: '一米厨充值',
  },
  {
    id: 12,
    category: '饮食',
    amount: -8.0,
    accountName: 'W零钱通',
    date: new Date('2025-11-21'),
    note: '八百里秦味',
  },
  {
    id: 13,
    category: '饮食',
    amount: -12.9,
    accountName: 'X信用卡',
    date: new Date('2025-11-23'),
    note: '大润发',
  },

  {
    id: 14,
    category: '房贷',
    amount: -2238.9,
    accountName: 'X银行卡',
    date: new Date('2025-12-19'),
  },
  {
    id: 15,
    category: '房租',
    amount: -2130.0,
    accountName: 'X银行卡',
    date: new Date('2025-12-30'),
  },

  {
    id: 16,
    category: '房贷',
    amount: -2238.9,
    accountName: 'X银行卡',
    date: new Date('2026-01-19'),
  },
  {
    id: 17,
    category: '房租',
    amount: -2130.0,
    accountName: 'X银行卡',
    date: new Date('2026-01-31'),
  },

  {
    id: 18,
    category: '房贷',
    amount: -2238.9,
    accountName: 'X银行卡',
    date: new Date('2026-02-19'),
  },
  {
    id: 19,
    category: '房租',
    amount: -2130.0,
    accountName: 'X银行卡',
    date: new Date('2026-02-28'),
  },
];

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatButtonModule, MatTableModule, DatePipe, CurrencyPipe, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  displayedColumns: string[] = ['date', 'category', 'amount', 'accountName', 'note', 'actions'];
  dataSource = ELEMENT_DATA.sort((a, b) => b.date.getTime() - a.date.getTime());
  today = new Date();

  isFuture(date: string): boolean {
    return new Date(date) > this.today;
  }

  onEdit(element: TransactionElement) {
    console.log('编辑：', element);
  }
}
