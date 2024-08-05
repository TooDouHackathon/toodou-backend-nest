import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'yoxiorder' })
export class YoxiOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  orderId: string

  @Column({ type: 'text' })
  driverId: string

  @Column({ type: 'text' })
  riderId: string

  @Column()
  getCarType: number

  @Column({ type: 'timestamp without time zone' })
  orderStartDateTime: Date

  @Column({ type: 'timestamp without time zone', nullable: true })
  orderEndDateTime: Date

  @Column('decimal', { precision: 10, scale: 6 })
  pickUpPointLong: number

  @Column('decimal', { precision: 10, scale: 6 })
  pickUpPointLat: number

  @Column('decimal', { precision: 10, scale: 6 })
  dropOffPointLong: number

  @Column('decimal', { precision: 10, scale: 6 })
  dropOffPointLat: number

  @Column()
  travelTime: number

  @Column()
  travelDistance: number

  @Column()
  driverCancel: boolean

  @Column()
  riderCancel: boolean

  @Column({ type: 'timestamp without time zone' })
  orderFormCreatedTime: Date

  @Column({ type: 'timestamp without time zone', nullable: true })
  orderCancelDateTime: Date

  @Column()
  tip: number

  @Column()
  paymentInterval: string

  @Column()
  paymentPointStatus: number

  @Column()
  paymentType: string

  @Column()
  affinityCreditCard: boolean

  @Column({ type: 'text' })
  discountCouponId: string

  @Column({ type: 'text' })
  discountId: string

  @Column({ nullable: true })
  displayTitle: string

  @Column({ nullable: true })
  displaySubtitle: string
}
