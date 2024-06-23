import ECS from "src/lib/ecs";
import AIComponent from "src/lib/ecs/components/AIComponent";
import AngleComponent from "src/lib/ecs/components/AngleComponent";
import AnimatedSpriteComponent from "src/lib/ecs/components/AnimatedSpriteComponent";
import AnimationManager from "src/managers/AnimationManager";
import BoxComponent from "src/lib/ecs/components/BoxComponent";
import CameraComponent from "src/lib/ecs/components/CameraComponent";
import CircleComponent from "src/lib/ecs/components/CircleComponent";
import ControlComponent from "src/lib/ecs/components/ControlComponent";
import EnemyComponent from "src/lib/ecs/components/EnemyComponent";
import HealthComponent from "src/lib/ecs/components/HealthComponent";
import MinimapComponent from "src/lib/ecs/components/MinimapComponent";
import MoveComponent from "src/lib/ecs/components/MoveComponent";
import PositionComponent from "src/lib/ecs/components/PositionComponent";
import RotateComponent from "src/lib/ecs/components/RotateComponent";
import TextureComponent from "src/lib/ecs/components/TextureComponent";
import TextureManager from "src/managers/TextureManager";
import WeaponComponent from "./ecs/components/WeaponComponent";
import CollisionComponent from "./ecs/components/CollisionComponent";
import SpriteComponent from "./ecs/components/SpriteComponent";
import PlayerComponent from "./ecs/components/PlayerComponent";
import ItemComponent from "./ecs/components/ItemComponent";
import DoorComponent from "src/lib/ecs/components/DoorComponent.ts";

export function createLevelEntities(
  ecs: ECS,
  level: Level,
  textureManager: TextureManager,
  animationManager: AnimationManager
) {
  // player
  const player = ecs.addEntity();

  ecs.addComponent(player, new PlayerComponent());
  ecs.addComponent(player, new ControlComponent());
  ecs.addComponent(player, new CircleComponent(0.4));
  ecs.addComponent(player, new WeaponComponent('pistol_bullet', 30, 100, 15, 250));
  ecs.addComponent(
    player,
    new PositionComponent(level.player.x, level.player.y)
  );
  ecs.addComponent(
    player,
    new HealthComponent(level.player.health, level.player.health)
  );
  ecs.addComponent(player, new AngleComponent(level.player.angle));
  ecs.addComponent(player, new MoveComponent(3, true));
  ecs.addComponent(player, new CollisionComponent());
  ecs.addComponent(player, new RotateComponent(360 / 30));
  ecs.addComponent(player, new CameraComponent(60));
  ecs.addComponent(player, new MinimapComponent("black"));

  // items
  level.items?.forEach((item) => {
    const entity = ecs.addEntity();

    ecs.addComponent(entity, new PositionComponent(item.x, item.y));
    ecs.addComponent(entity, new PositionComponent(item.x, item.y));
    ecs.addComponent(entity, new CircleComponent(item.radius));
    ecs.addComponent(entity, new MinimapComponent("orange"));

    switch (item.type) {
      case "health_pack":
        ecs.addComponent(entity, new ItemComponent('health_pack', item.value));
        ecs.addComponent(
          entity,
          new SpriteComponent(textureManager.get("health_pack"))
        );
        break;
      case "ammo":
        ecs.addComponent(entity, new ItemComponent('ammo', item.value));
        ecs.addComponent(
          entity,
          new SpriteComponent(textureManager.get("ammo"))
        );
        break;
    }
  });

  // enemies
  level.enemies?.forEach((enemy) => {
    const entity = ecs.addEntity();

    ecs.addComponent(entity, new MoveComponent(1, true));
    ecs.addComponent(entity, new CollisionComponent());
    ecs.addComponent(entity, new EnemyComponent());
    ecs.addComponent(entity, new CircleComponent(enemy.radius));
    ecs.addComponent(entity, new PositionComponent(enemy.x, enemy.y));
    ecs.addComponent(entity, new HealthComponent(enemy.health, enemy.health));
    ecs.addComponent(entity, new AngleComponent(enemy.angle));
    ecs.addComponent(entity, new RotateComponent());
    ecs.addComponent(entity, new MinimapComponent("red"));

    if (enemy.aiDistance) {
      ecs.addComponent(entity, new AIComponent(enemy.aiDistance));
    }

    if (enemy.weapon) {
      ecs.addComponent(entity, new WeaponComponent(
        enemy.weapon.bulletSpriteId,
        Infinity,
        enemy.weapon.bulletDamage,
        enemy.weapon.bulletSpeed,
        enemy.weapon.attackDistance,
        enemy.weapon.attackFrequency
      ));
    }

    switch (enemy.type) {
      case "zombie":
        ecs.addComponent(
          entity,
          new AnimatedSpriteComponent("idle", {
            attack: animationManager.get("zombieAttack"),
            idle: animationManager.get("zombieIdle"),
            damage: animationManager.get("zombieDamage"),
            death: animationManager.get("zombieDeath"),
            walk: animationManager.get("zombieWalk"),
          })
        );
        break;
      case "soldier":
        ecs.addComponent(
          entity,
          new AnimatedSpriteComponent("idle", {
            attack: animationManager.get("soldierAttack"),
            idle: animationManager.get("soldierIdle"),
            damage: animationManager.get("soldierDamage"),
            death: animationManager.get("soldierDeath"),
            walk: animationManager.get("soldierWalk"),
          })
        );
        break;
      case "slayer":
        ecs.addComponent(
          entity,
          new AnimatedSpriteComponent("idle", {
            attack: animationManager.get("slayerAttack"),
            idle: animationManager.get("slayerIdle"),
            damage: animationManager.get("slayerDamage"),
            death: animationManager.get("slayerDeath"),
            walk: animationManager.get("slayerWalk"),
          })
        );
        break;
      case "flyguy":
        ecs.addComponent(
          entity,
          new AnimatedSpriteComponent("idle", {
            attack: animationManager.get("flyguyAttack"),
            idle: animationManager.get("flyguyIdle"),
            damage: animationManager.get("flyguyDamage"),
            death: animationManager.get("flyguyDeath"),
            walk: animationManager.get("flyguyWalk"),
          })
        );
        break;
      case "commando":
        ecs.addComponent(
          entity,
          new AnimatedSpriteComponent("idle", {
            attack: animationManager.get("commandoAttack"),
            idle: animationManager.get("commandoIdle"),
            damage: animationManager.get("commandoDamage"),
            death: animationManager.get("commandoDeath"),
            walk: animationManager.get("commandoWalk"),
          })
        );
        break;
      case "tank":
        ecs.addComponent(
          entity,
          new AnimatedSpriteComponent("idle", {
            attack: animationManager.get("tankAttack"),
            idle: animationManager.get("tankIdle"),
            damage: animationManager.get("tankDamage"),
            death: animationManager.get("tankDeath"),
            walk: animationManager.get("tankWalk"),
          })
        );
        break;
    }
  });

  // exit

  if (level.endingScenario.name === 'exit') {
    const exit = ecs.addEntity();

    ecs.addComponent(exit, new BoxComponent(1));
    ecs.addComponent(exit, new PositionComponent(level.endingScenario.position.x, level.endingScenario.position.y));
    ecs.addComponent(exit, new MinimapComponent("yellow"));
  }

  // walls
  level.map.forEach((row, y) => {
    row.forEach((col, x) => {
      const mapItem = level.mapEntities[col];
      if (mapItem.type === 'empty') {
        return;
      }
      const mapItemEntity = ecs.addEntity();
      const texture = textureManager.get(mapItem.texture);

      ecs.addComponent(mapItemEntity, new BoxComponent(1));
      ecs.addComponent(mapItemEntity, new PositionComponent(x, y));
      ecs.addComponent(mapItemEntity, new TextureComponent(texture));


      if (mapItem.type === 'wall') {
        ecs.addComponent(mapItemEntity, new MinimapComponent("grey"));
      } else if (mapItem.type === 'door') {
        const [aboveBloc, underBloc] = [level.map[y - 1][x], level.map[y + 1][x]];
        const isVerticalDoor =  level.mapEntities[aboveBloc]?.type === 'wall' && level.mapEntities[underBloc]?.type === 'wall' ;
        ecs.addComponent(mapItemEntity, new DoorComponent(false, isVerticalDoor));

        ecs.addComponent(mapItemEntity, new MinimapComponent("blue"));
      }
    });
  });
}
