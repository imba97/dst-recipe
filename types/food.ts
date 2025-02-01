export interface Food {
  /**
   * 名称
   */
  name: string

  /**
   * 恢复生命值
   */
  health: number

  /**
   * 恢复饥饿值
   */
  hunger: number

  /**
   * 恢复精神值
   */
  sanity: number

  /**
   * 保质期
   */
  life: number

  /**
   * 烹饪时长
   */
  cooking: number

  /**
   * 优先级
   */
  priority: number

  /**
   * 图片
   */
  image: string
}
