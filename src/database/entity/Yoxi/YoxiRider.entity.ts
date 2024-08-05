import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'yoxirider' })
export class YoxiRider {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  memberOneId: string

  @Column({ type: 'text' })
  riderId: string

  @Column()
  orderFormCountsInTotal: number

  @Column({ type: 'timestamp without time zone' })
  verifiedTime: Date

  @Column()
  defaultPaymentMethod: string

  @Column()
  useHotaiPoint: boolean
}
